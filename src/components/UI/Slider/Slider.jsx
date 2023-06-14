import React from "react";
import './style.css';
import ChatBot from "react-best-chatbot";
import QuestionBlock from "../QuestionBlock/QuestionBlock";

const Slider = (props) => {
  return (
//     <div class="wrapper">
// 	<input type="radio" name="point" id="slide1" checked></input>
// 	<input type="radio" name="point" id="slide2"></input>
// 	<input type="radio" name="point" id="slide3"></input>
// 	<input type="radio" name="point" id="slide4"></input>
// 	<input type="radio" name="point" id="slide5"></input>
// 	<div class="slider">
// 		<div class="slides slide1"></div>
// 		<div class="slides slide2"></div>
// 		<div class="slides slide3"></div>
// 		<div class="slides slide4"></div>
// 		<div class="slides slide5"></div>
// 	</div>	
// 	<div class="controls">
// 		<label for="slide1"></label>
// 		<label for="slide2"></label>
// 		<label for="slide3"></label>
// 		<label for="slide4"></label>
// 		<label for="slide5"></label>
// 	</div>
// </div>
<section class="question-answer">
    <div className="container">
      <div class="container" data-aos="fade-up">
        <h2 class="question-answer_label">Вопрос-Ответ</h2>
        <p class="question-answer_description">Мы ответим на самые популярные ваши вопросы</p>
        <div class="container question-list">
          <QuestionBlock/>
          {/* <div class="question">
            <details class="questions-list-item">
              <summary class="question-info question-text">
                <span class="question-number">01</span>
                В какое время вам удобнее производить ремонтные работы?
              </summary> 
              <p class="answer-text">
                тут текст
              </p>
            </details>
          </div>
          <div class="question">
            <details class="questions-list-item">
              <summary class="question-info question-text">
                <span class="question-number">02</span>
                Со скольки вы работаете?
              </summary> 
              <p class="answer-text">Тут текст</p>
            </details>
          </div>
          <div class="question">
            <details class="questions-list-item">
              <summary class="question-info question-text">
                <span class="question-number">03</span>
                Можно ли заказать услуги, если я живу в другом городе?
              </summary> 
              <p class="answer-text">Тут текст</p>
            </details>
          </div>
          <div class="question">
            <details class="questions-list-item">
              <summary class="question-info question-text">
                <span class="question-number">04</span>
                Как Вас найти?
              </summary> 
              <p class="answer-text">Тут текст</p>
            </details>
          </div> */}
        </div>
        {/* <button type="button" class="question-button">Задать вопрос</button> */}
      </div>
      </div>  
    </section>
  );
};

export default Slider;