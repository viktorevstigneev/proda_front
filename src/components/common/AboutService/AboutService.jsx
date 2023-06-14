import React from "react";
import './style.css'

const AboutService = () => {
  return (
    <div>
      <section class="bonus">
      <div class="bonus-container container" data-aos="flip-left">
        <h2 class="bonus-label">Почему именно мы?</h2>
        <p class="bonus-description text-orange">Заказывая услуги в нашем Автосервисе вы получите</p>
        <ul class="bonus-list">
          <li class="bonus-list-item">
            <a class="bonus-list-link" href="#">
                <div class="bonus-list-item-center">
                  <img className="bonus-img" src='https://perevozki-stolitsa.ru/wp-content/uploads/2018/12/Sovety-avtomasterov-voditeljam-500x332.jpg'></img>
                  <p  class="bonus-list-description">Надежные и проверенные временем мастера</p>
                </div>
              </a>
            </li>
             <li class="bonus-list-item">
            <a class="bonus-list-link" href="#">
                <div class="bonus-list-item-center">
                  <img className="bonus-img" src='https://5koleso.ru/wp-content/uploads/2019/art/files/u68/image_171.jpeg'></img>
                  <p  class="bonus-list-description">Работаем с 8 до 20</p>
                </div>
              </a>
            </li>
             <li class="bonus-list-item">
            <a class="bonus-list-link" href="#">
                <div class="bonus-list-item-center">
                  <img className="bonus-img" src='https://adt.by/wp-content/uploads/2015/03/sto.jpg'></img>
                  <p  class="bonus-list-description">Индивидуальный подход к ремонту каждого автомобиля</p>
                </div>
              </a>
            </li>
            
            <li class="bonus-list-item">
              <a class="bonus-list-link" href="#">
                <div class="bonus-list-item-center">
                  <img className="bonus-img" src='https://img.freepik.com/free-photo/front-view-car-service-employees-working_23-2148327543.jpg'></img>
                  <p class="bonus-list-description">Консультирование по любому вопросу 24 часа в сутки</p>
                </div>  
              </a>
            </li>
            <li class="bonus-list-item">
              <a class="bonus-list-link" href="#">
                <div class="bonus-list-item-center">
                  <img className="bonus-img" src='https://win-sto.ru/simg/presentation/win-sto-2.jpg'></img>
                  <p class="bonus-list-description">Скорость и качество. Ведь мы делаем всё как нельзя лучше</p>
                </div> 
              </a>
            </li>
        </ul>
      </div>
    </section>
    </div>
  );
};

export default AboutService;