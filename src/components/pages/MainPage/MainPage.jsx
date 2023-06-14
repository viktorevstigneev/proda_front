import React, { Component, useEffect, useState } from 'react';
import Chatbot from 'react-best-chatbot';

import './style.css';
import axios from 'axios';
import Slider from '../../UI/Slider';
import ImageSlider from '../../common/Slider/Slider';
import Footer from '../../common/Footer/Footer';
import AboutService from '../../common/AboutService/AboutService';
import Reviews from '../../common/Reviews/Reviews';
import ServiceNews from '../../common/ServiceNews/ServiceNews';
import MorePhotos from '../../common/MorePhotos/MorePhotos';

const MainPage = () => {
	const [user, setUser] = useState();
	const [name, setName] = useState();
	console.log('name: ', name);

	const CustomComponentWithBubbleName = ({ answers }) => {
		const { values } = answers;
		const { name } = values;
		setName(name);

		return <div>Спасибо, {name}! Какой вопрос ты хочешь задать?</div>;
	};

	const steps = [
		{
			id: 1,
			content: 'Привет, я твой персональный бот помощник',
			goTo: 'name',
		},
		{
			id: 'name',
			content: 'скажи как я могу к тебе обращаться?',
			receiveInput: true,
			goTo: 'question',
		},
		{
			id: 'question',
			component: {
				content: CustomComponentWithBubbleName,
			},
			receiveInput: true,
			goTo: 'number',
		},
		{
			id: 'number',
			content: 'Напиши свой номер телефона и мы перезвоним в ближайшее время?',
			receiveInput: true,
			goTo: 4,
		},
		{
			id: 4,
			content: 'Запрос принят, спасибо, ожидайте!!!',
			end: true,
		},
	];

	const [options, setOptions] = useState({
		chatButtonComponent: (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(245,245,220)",
        color: "rgb(245,245,220)",
        borderRadius: "50%",
        height: 80,
        width: 80,
        cursor: "pointer",		
      }}
    >
			<img width={50} src="https://cdn-icons-png.flaticon.com/512/4616/4616759.png" alt="" />
    </div>
  ),
		
		header: "Бот-ассистент",
		open: false, 
		endingCallback: (answers, toggleOpen, refresh) => {
			axios.post('https://formspree.io/f/mnqylpqd', answers.values);
		},
	},
	
	)

	// const toggleOpen = () => {
	// 	setOptions((prev)=>({...prev, open: !prev.open}))
	// }

	return (
		<>
			<main className="home__main">
				<section className="home__main_title">
					<h1 className="home__title">Ремонт автомобилей в Гродно</h1>
					<p className="home_caption">Приглашаем вас на нашу станцию тех обслуживания автомобилей </p>
				</section>
				<section>
					<AboutService/>
				</section>	
				<section>
					<Reviews/>
				</section>	
			  <section>
					<Slider/>
				</section>
				<section>
					<ServiceNews/>
					<MorePhotos/>	
				</section>		
			
					<Chatbot style={{
						zIndex:9999
					}}  steps={steps} options={options}/>
				
			</main>
		</>
	);
};

export default MainPage;
