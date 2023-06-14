import React, { useEffect, useState, useCallback, useRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import './style.css';
// import axios from 'axios';
import { API_URL, POPUP_OVERLAY_CLASSNAME } from '../../../constants';
import s1 from '../../../img/serv.png';

import Modal from '../../common/Modal/Modal';
import axios from 'axios';

const ServicePage = ({ user }) => {
	// const [user, setUser] = useState();
	const [serviceData, setServiceData] = useState();
	console.log('serviceData: ', serviceData);
	const [isOpen, setIsOpen] = useState(false);
	const [chosenService, setChosenService] = useState();

	useEffect(() => {
		const getServices = async () => {
			const responseData = await axios
				.get(`${API_URL}/service`, { withCredentials: true })
				.then((response) => setServiceData(response.data));
		};
		getServices();
	}, []);

	const handleModalWindowCloseButtonClick = useCallback((evt) => {
		evt.preventDefault();
		setIsOpen(false);
	}, []);

	const handleModalWindowOverlayClick = useCallback((evt) => {
		if (evt.target.classList.contains(POPUP_OVERLAY_CLASSNAME)) {
			setIsOpen(false);
		}
	}, []);

	return (
		<>
			<main className="service">
				<h1 className="service__title">Наши услуги</h1>
				

				<div className="servise__content">
					<ul className='service__list'>
						<li className='service__list-item1'>Услуга</li>
						<li className='service__list-item2'>Стоимость</li>
						<li className='service__list-item3'>Описание</li>
						
					</ul>
					{serviceData &&
						serviceData.map((item, index) => (
							<div
								key={item.id}
								className="service__item"
								onClick={() => {
									setIsOpen(true);
									setChosenService(item);
								}}
								style={{ background: index % 2 == 0 ? '#d0e5f7' : '#ffffff' }}
								// title={item?.description}
							>
								<img className="service__img" src={s1} alt="" />
								<div className="service__name">{item.name}</div>
								<div className="service__price">{item.price}BYN</div>
								<div className="service__description">{item?.description}</div>
								{user && user.isAdmin ? (
									<div
										className="service__delete"
										onClick={(evt) => {
											evt.stopPropagation();
											axios.delete(`${API_URL}/service?id=${item?._id}`);
											window.location.reload();
										}}
									>
										&times;
									</div>
								) : null}
							</div>
						))}
				</div>

				{user && user.isAdmin ? (
					<div className="service__wrapper">
						<form
							className="service__add"
							encType="multipart/form-data"
							method="POST"
							onSubmit={async (evt) => {
								evt.preventDefault();

								const formData = new FormData(evt.target);

								const responseData = await axios({
									method: 'POST',
									url: `${API_URL}/service`,
									data: formData,
									withCredentials: true,
								});
								window.location.reload();
							}}
						>
							<label className="service__add-label" htmlFor="name">
								Введите полное название услуги
							</label>
							<input className="service__add-input" name="name" type="text" id="name" />

							<label className="service__add-label" htmlFor="price">
								Введите цену услуги
							</label>
							<input className="service__add-input" name="price" type="number" id="price" />

							<label className="service__add-label" htmlFor="description">
								Введите описание услуги
							</label>
							<textarea
								style={{ resize: 'none', height: '200px' }}
								className="service__add-input"
								name="description"
								type="text"
								id="description"
							/>

							<button className="service__add-submit" type="submit">
								добавить услугу
							</button>
						</form>
						{/* <img className="service__add-img" src={s1} alt="" /> */}
					</div>
				) : null}
			</main>

			{isOpen && (
				<Modal
					title={chosenService?.name}
					onCloseButtonClick={handleModalWindowCloseButtonClick}
					onOverlayClick={handleModalWindowOverlayClick}
				>
					<form
						className="open__block"
						encType="multipart/form-data"
						method="POST"
						onSubmit={async (evt) => {
							evt.preventDefault();

							const formData = new FormData(evt.target);
							formData.append('serviceId', chosenService?._id);
							console.log('chosenService: ', chosenService);
							formData.append('userId', user?._id);

							const responseData = await axios({
								method: 'POST',
								url: `${API_URL}/Orders`,
								data: formData,
								withCredentials: true,
							});
							window.location.reload();
						}}
					>
						<label className="service__label" htmlFor="name">
							Введите полное наименование и год машины
						</label>
						<input className="service__input" name="name" type="text" id="name" />

						<label className="service__label" htmlFor="time">
							Выберите дату когда вам удобно отдать машину на <strong> {chosenService?.name}</strong>
						</label>
						<input className="service__input" name="time" type="date" id="time" />

						<label className="service__label " htmlFor="phone">
							Укажите ваш номер телефона
						</label>
						<PhoneInput
							country={'by'}
							inputProps={{
								name: 'phone',
								required: true,
								// autoFocus: true,
							}}
							// value={this.state.phone} onChange={(phone) => this.setState({ phone })}
						/>

						<p className="service__info">&#128712; оплата производится по факту после завершения работы</p>

						{user && user ? (
							<button className="service__submit" type="submit">
								Заказать
							</button>
						) : (
							<p className="service__info--error">&#128712; чтобы заказать необходимо войти или зарегистрироваться?</p>
						)}
					</form>
				</Modal>
			)}
		</>
	);
};

export default ServicePage;
