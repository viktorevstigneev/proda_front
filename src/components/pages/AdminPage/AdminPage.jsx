import React, { useEffect, useState, useCallback, useRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import './style.css';
// import axios from 'axios';
import { API_URL, POPUP_OVERLAY_CLASSNAME } from '../../../constants';
import s1 from '../../../img/serv.png';

import Modal from '../../common/Modal/Modal';
import axios from 'axios';

const AdminPage = () => {
	const [serviceData, setServiceData] = useState();
	useEffect(() => {
		const getClothes = async () => {
			const responseData = await axios.get(`${API_URL}/Orders`, { withCredentials: true }).then((response) => {
				setServiceData(response.data);
			});
		};
		getClothes();
	}, []);

	return (
		<>
			<main className="service">
				<h1 className="service__title">Все заказанные услуги</h1>

				<table class="table ct">
					<thead>
						<tr>
							<th>Услуга</th>
							<th>Машина</th>
							<th>Дата сдачи автомобиля</th>
							<th>клиент</th>
							<th>статус</th>
							<th>......</th>
						</tr>
					</thead>
					<tbody>
						{serviceData ? (
							serviceData.map((order, index) => (
								<tr style={{ background: index % 2 == 0 ? '#d0e5f7' : '#ffffff' }}>
									<td>{order?.serviceId?.name}</td>
									<td>{order?.name}</td>
									<td>{order?.time}</td>
									<td>{order?.userId?.username}</td>
									<td>
										<select
											value={order?.status}
											onChange={(evt) => {
												axios.patch(`${API_URL}/Orders`, { id: order?._id, status: evt.target.value });
												window.location.reload();
											}}
										>
											<option value={false}>в ожидании</option>
											<option value={true}>выполнено</option>
										</select>
									</td>
									<td
										style={{color: 'red', cursor: "pointer"}}
										onClick={(evt) => {
											evt.stopPropagation();
											axios.delete(`${API_URL}/Orders?id=${order?._id}`);
											window.location.reload();
										}}
									>
										удалить
									</td>
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

				{/* <div className="servise__content">
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
							>
								<img className="service__img" src={s1} alt="" />
								<div className="service__name">{item.name}</div>
								<div className="service__price">{item.price}BYN</div>
								<div className="service__delete">&times;</div>
							</div>
						))}
				</div> */}
			</main>
		</>
	);
};

export default AdminPage;
