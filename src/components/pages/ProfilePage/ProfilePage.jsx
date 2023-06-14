import React, { useCallback, useEffect, useRef, useState } from 'react';
import AnalogClock from 'analog-clock-react';

import Slider from '../../common/Slider';

import { COLORS_FILTER, TYPE_FILTER } from './data';
import './style.css';
import { API_URL, POPUP_OVERLAY_CLASSNAME } from '../../../constants';
// import { profileData } from './data';

import axios from 'axios';
import Modal from '../../common/Modal/Modal';

let options = {
	width: '300px',
	border: true,
	borderColor: '#2e2e2e',
	baseColor: '#4b3b3d',
	centerColor: '#459cff',
	centerBorderColor: '#ffffff',
	handColors: {
		second: '#d81c1c',
		minute: '#ffffff',
		hour: '#ffffff',
	},
};

const orders = [
	{
		id: 1,
		userId: 1,
		name: 'Замена сцепления',
		status: 'В процессе',
		date: new Date().toLocaleString(),
	},
];

const ProfilePage = () => {
	const [user, setUser] = useState();

	const [cartData, setCartData] = useState();
	const [isOpen, setIsOpen] = useState();

	useEffect(() => {
		const getCurrentUser = async () => {
			const responseData = await axios
				.get(`${API_URL}/profile`, { withCredentials: true })
				.then((response) => setUser(response.data));
		};
		getCurrentUser();
	}, []);

	useEffect(() => {
		const getClothes = async () => {
			const responseData = await axios.get(`${API_URL}/Orders`, { withCredentials: true }).then((response) => {
				setCartData(response.data);
			});
		};
		getClothes();
	}, []);

	const userOrder = cartData && cartData.filter((value) => value.userId?._id == user?._id);
	console.log('cartData: ', cartData);
	console.log('userOrder: ', userOrder);

	const checkAllOrderIsDone = (orders) => {
		const allCount = orders && orders.length;

		const amountOfDone = orders && orders.filter((item) => item.status).length;

		return allCount == amountOfDone && allCount != 0;
	};

	const getTotal = () => {
		let sum = 0;

		userOrder &&
			userOrder.forEach((item) => {
				sum += +item.serviceId.price;
			});

		return sum;
	};

	console.log('totalPrice: ', getTotal());

	console.log('checkAllOrderIsDone: ', checkAllOrderIsDone(userOrder));

	const handleModalWindowCloseButtonClick = useCallback((evt) => {
		evt.preventDefault();
		setIsOpen(false);
	}, []);

	const handleModalWindowOverlayClick = useCallback((evt) => {
		if (evt.target.classList.contains(POPUP_OVERLAY_CLASSNAME)) {
			setIsOpen(false);
		}
	}, []);

	const CallPrint = () => {
		let prtContent = ref.current;
		let WinPrint = window.open('', '', 'left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
		WinPrint.document.write(prtContent.innerHTML);
		WinPrint.document.close();
		WinPrint.focus();
		WinPrint.print();
		WinPrint.close();
	};

	const ref = useRef();

	return (
		<>
			<main className="profile">
				<div className="profile__container">
					<h1 className="profile__title">Ваши заказаные услуги</h1>
					<div className="profile__wrapper">
						{/* <img className="profile__avatar" src={defaultImg} alt="" /> */}
						<div className="profile__block">
							<p className="profile__cred"></p>
							{/* <p className="profile__cred">Email: gdjfdfsfs</p> */}
						</div>
					</div>
				</div>
				<div className="profile__wrapper">
					<AnalogClock {...options} />
					<table class="table">
						<thead>
							<tr>
								<th>Услуга</th>
								<th>Машина</th>
								<th>Дата сдачи автомобиля</th>
								<th>статус</th>
								<th>изменить</th>
							</tr>
						</thead>
						<tbody>
							{userOrder ? (
								userOrder.map((order) => (
									<tr>
										<td>{order?.serviceId?.name}</td>
										<td>{order?.name}</td>
										<td>{order?.time}</td>
										<td>{order?.status ? 'выполнено' : 'в ожидании'}</td>
										{!order?.status ? (
											<td
												style={{ color: 'red', cursor: 'pointer' }}
												onClick={(evt) => {
													evt.stopPropagation();
													axios.delete(`${API_URL}/Orders?id=${order?._id}`);
													window.location.reload();
												}}
											>
												отменить услугу
											</td>
										) : (
											<td>нельзя отменить</td>
										)}
									</tr>
								))
							) : (
								<tr>
									<td>нет заказанных услуг</td>
								</tr>
							)}
							...
						</tbody>
					</table>
				</div>
				<h1 className="profile__title pt">Общая сумма услуг: {getTotal()}BYN</h1>
				{checkAllOrderIsDone(userOrder) && (
					<button className="print_btn" onClick={() => setIsOpen(true)}>
						{' '}
						просмотреть и распечатать акт о работах
					</button>
				)}

				{isOpen && (
					<Modal
						// title={'Акт о выполненых работах'}
						onCloseButtonClick={handleModalWindowCloseButtonClick}
						onOverlayClick={handleModalWindowOverlayClick}
					>
						<div ref={ref}>
							<h2 style={{ textAlign: 'center' }}>Акт о выполнении работ</h2>
							<p style={{ textAlign: 'center' }}> от {new Date().toLocaleDateString()}</p>
							<p>Исполнитель ООО "Кефикс"</p>
							<p>Заказчик {user?.username}</p>

							<table style={{ border: '1px solid black' }}>
								<thead>
									<tr>
										<th style={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>Услуга</th>
										<th style={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>Машина</th>
										<th style={{ borderBottom: '1px solid black' }}>Дата Отдачи автомобиля</th>
									</tr>
								</thead>
								<tbody>
									{userOrder &&
										userOrder.map((order) => (
											<tr>
												<td style={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>
													{order?.serviceId?.name}
												</td>
												<td style={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>
													{order?.name}
												</td>
												<td style={{ borderBottom: '1px solid black' }}>{order?.time}</td>
											</tr>
										))}
									...
								</tbody>
							</table>

							<p>Итого:{getTotal()}BYN</p>
						</div>
						<button
							className="print_btn"
							onClick={() => {
								CallPrint();
							}}
						>
							печать
						</button>
					</Modal>
				)}
			</main>
		</>
	);
};

export default ProfilePage;
