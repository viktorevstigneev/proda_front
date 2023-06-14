import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../img/logo.png';
import './style.css';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container">
				<img className="header__logo" src={logo} alt="logo" />
				<div className='footer-about'>
					<div className='footer-about-block'>
						<h3 className='footer-about-label'>О компании</h3>
						<p>Общество с дополнительной ответственностью «Эффектлига» было создано в 1999 году. С момента своего образования и до сегодняшнего дня предприятие занимается предоставлением лизинговых услуг и является лизинговой компанией, имеет успешный опыт кредитования практически во всех крупнейших банках республики.</p>
					</div>
					<div className='footer-about-block'>
						<h3 className='footer-about-label'>Контакты</h3>
						<span><img className='footer-img' src="https://abrakadabra.fun/uploads/posts/2022-02/1644403887_1-abrakadabra-fun-p-ikonka-geometka-4.png" alt="" />г.Гродно, улица Курчатова 12</span>
						<br />
						<span><img className='footer-img' src="https://abrakadabra.fun/uploads/posts/2022-02/1644403887_1-abrakadabra-fun-p-ikonka-geometka-4.png" alt="" />БЕЗ ВЫХОДНЫХ с 8 до 20</span>
						<br />
						<span><img className='footer-img' src="https://abrakadabra.fun/uploads/posts/2022-02/1644403887_1-abrakadabra-fun-p-ikonka-geometka-4.png" alt="" />Вблизи центра</span>
						<br />
						<span className='phone'>Слесарный ремонт</span>
						<br />
						<span className='phone'><img className='footer-img' src="https://cdn-icons-png.flaticon.com/512/5037/5037238.png" alt="" />+375(29)-783-02-03</span>
						<br />
						<span className='phone'>Кузовной ремонт</span>
						<br />
						<span className='phone'><img className='footer-img' src="https://cdn-icons-png.flaticon.com/512/5037/5037238.png" alt="" />+375(29)-783-02-03</span>
					</div>
				</div>
				<p className="footer__description">©copyright 2023 GGKTTID</p>
			</div>
		</footer>
	);
};

export default Footer;
