import React, { useState } from "react";
import './style.css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Reviews = () => {
  const review =[
  {
    reviewImage:`https://www.avtoradosti.com.ua/files/2020/news/antifreez/about-img.jpg`,
    reviewAltToImage:`Ермаков Алексей`,
    reviewName:`Ермаков Алексей`,
    reviewTier: `Сервис-консультант`,
    reviewText:`Самый компетентный и сдержанный консультант на всём свете. Общение с ним одно удовольствие`,
    reviewDataTime: `24-05-2018`,
    reviewDate:`24 мая 2018`
  },
  {
    reviewImage:`https://sun9-14.userapi.com/impg/ZPPZyQYyjt4JRdQMd7FtHBUZcZa7P8_87cvPAg/YNPBsq4Gk5s.jpg?size=1280x853&quality=96&sign=0ac23fed11e2a3b80a2815798e1770fe&type=album`,
    reviewAltToImage:`Валерий Шумель`,
    reviewName:`Валерий Шумель`,
    reviewTier: `Управляющий`,
    reviewText:`Уверенный руководитель с самого открытия Сервиса`,
    reviewDataTime: `20-04-2020`,
    reviewDate:`20 апреля 2020`
  },
  {
    reviewImage:`https://thumbs.dreamstime.com/b/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%BC%D0%B5%D1%85%D0%B0%D0%BD%D0%B8%D0%BA-%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%D0%B8%D1%80%D1%83%D0%B5%D1%82-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%8D%D0%BF%D0%B8%D1%86%D0%B5%D0%BD%D1%82%D1%80-%D0%B4%D0%B5%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D0%B2-127933323.jpg`,
    reviewAltToImage:`Смирнов Александр`,
    reviewName:`Смирнов Александр`,
    reviewTier: `Механик линии дигностики ходовой части`,
    reviewText:`Мастер на все руки. Своё дело знает лучше других`,
    reviewDataTime: `01-09-1999`,
    reviewDate:`1 сентября 1999`
  },
  {
    reviewImage:`https://sun9-26.userapi.com/impg/c857228/v857228127/18dad4/NgaiFVMuacI.jpg?size=1280x853&quality=96&sign=136496e45824708bb9a6d2b276a1cc09&type=album`,
    reviewAltToImage:`Кирилл Степанчук`,
    reviewName:`Кирилл Степанчук`,
    reviewTier: `Механик`,
    reviewText:`Этот парень вывозит чисто внешкой. Что забыл у нас хз`,
    reviewDataTime: `03-12-2021`,
    reviewDate:`3 декабря 2021`
  },
  {
    reviewImage:`https://mir-auto24.ru/wp-content/uploads/2018/03/automass-1000x667.jpg`,
    reviewAltToImage:`Даниил Фидрик`,
    reviewName:`Даниил Фидрик`,
    reviewTier: `Механик`,
    reviewText:`Машины и клиенты в восторге от его работы`,
    reviewDataTime: `25-04-2022`,
    reviewDate:`25 апреля 2022`
  },
  {
    reviewImage:`https://thumbs.dreamstime.com/b/%D0%BF%D1%80%D0%BE%D1%84%D0%B5%D1%81%D1%81%D0%B8%D0%BE%D0%BD%D0%B0-%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BC%D0%B5%D1%85%D0%B0%D0%BD%D0%B8%D0%BA-%D1%80%D0%B5%D0%B3%D1%83-%D0%B8%D1%80%D1%83%D1%8F-%D0%B2%D1%8B%D1%80%D0%B0%D0%B2%D0%BD%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE-%D0%B5%D1%81%D0%B0-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8-%D1%8F-80992895.jpg`,
    reviewAltToImage:`Смирнов Александр`,
    reviewName:`Смирнов Александр`,
    reviewTier: `Автоэлектрик`,
    reviewText:`Молодой и перспективный Автоэлектрик, после его работ машина любого года будет не хуже теслы`,
    reviewDataTime: `22-04-2022`,
    reviewDate:`22 апреля 2022`
  },
  {
    reviewImage:`https://sun9-77.userapi.com/impg/0-ky_Ps9ZcgPiWfPhKb20Vwr1mOCUHGaqIVlOw/ku3wJb-dvgg.jpg?size=2160x2160&quality=96&sign=0b85f74e317dcc9ec3e99417b8cddf42&type=album`,
    reviewAltToImage:`Захарченя Дарья`,
    reviewName:`Захарченя Дарья`,
    reviewTier: `Главный маркетолог`,
    reviewText:`Реклама с этой дамой засияет новыми красками`,
    reviewDataTime: `22-04-2022`,
    reviewDate:`22 апреля 2022`
  }
  ]
  
  return (
    <section className="reviews">
      <h2 className="reviews-label">Наша команда</h2>
     <Swiper className="reviews-container"
     z-index='9999'
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
        {review.map((review)=>{
          return <SwiperSlide className="reviews-slide">
            <div class="swiper-slide">
              <div className="container">
              <div class="reviews-profile">
              <img src={review.reviewImage} alt={review.reviewAltToImage} class="reviews-profile-photo"></img>
                <div class="reviews-description">
                  <span class="reviews-description-name">
                    {review.reviewName}
                  </span>
                  <br />
                  <span class="reviews-description-name">
                    {review.reviewTier}
                  </span>
                  <p class="reviews-description-text">
                    {review.reviewText}
                  </p>
                  <div class="reviews-description-info">
                    <time datetime={review.reviewDataTime} class="reviews-description-date">
                      {review.reviewDate}
                    </time>
                    <a href="https://twitter.com/?lang=ru" class="reviews-description-socials">
                      <svg class="reviews-soclink" width="15" height="10" viewBox="0 0 15 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.9515 4.31752C13.7432 4.2522 14.2802 3.89227 14.4869 3.40389C14.2013 3.57934 13.3148 3.77061 12.8251 3.58845C12.8011 3.47341 12.7743 3.36414 12.748 3.26549C12.3749 1.89556 11.0976 0.791905 9.75915 0.925233C9.86744 0.881512 9.97727 0.840805 10.0868 0.804261C10.2341 0.751494 11.0985 0.610857 10.9623 0.305756C10.8476 0.0373961 9.79156 0.508567 9.59272 0.570151C9.85521 0.471433 10.2893 0.301627 10.3358 0C9.93368 0.05516 9.5389 0.245287 9.23387 0.521742C9.34399 0.403196 9.42754 0.258724 9.44527 0.103241C8.37268 0.788464 7.74612 2.16992 7.23906 3.50999C6.84091 3.12413 6.48803 2.82027 6.17146 2.65155C5.28336 2.1753 4.22149 1.6784 2.55459 1.05961C2.50343 1.61111 2.82734 2.34441 3.7607 2.83207C3.55848 2.805 3.18869 2.8654 2.89293 2.93623C3.01337 3.56803 3.40674 4.08856 4.47166 4.34027C3.98498 4.37239 3.73347 4.48314 3.50552 4.72183C3.72718 5.16125 4.26806 5.6784 5.24104 5.57224C4.15928 6.0385 4.79996 6.90195 5.68019 6.77318C4.17858 8.32418 1.81113 8.21019 0.45166 6.91293C4.00114 11.7496 11.7169 9.77332 12.8667 5.11471C13.7282 5.12205 14.2347 4.81629 14.5487 4.4792C14.0523 4.56343 13.3329 4.47638 12.9515 4.31752Z"
                          fill="#A07B50" />
                      </svg>
                    </a>
                    <a href="https://vk.com/ssshizoide" class="reviews-description-socials">
                      <svg class="reviews-soclink" width="13" height="8" viewBox="0 0 13 8" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.8841 7.1355C12.8492 7.0724 12.633 6.56585 11.593 5.52472C10.5041 4.43452 10.6504 4.61154 11.9619 2.72647C12.7606 1.57842 13.08 0.877323 12.98 0.577604C12.8849 0.291906 12.2975 0.367274 12.2975 0.367274L10.3441 0.379543C10.3441 0.379543 10.1994 0.35851 10.0914 0.427744C9.98654 0.496101 9.9191 0.653848 9.9191 0.653848C9.9191 0.653848 9.60951 1.54249 9.19673 2.29792C8.32648 3.89204 7.97789 3.97617 7.83569 3.87714C7.50498 3.64666 7.58786 2.94994 7.58786 2.45567C7.58786 0.910625 7.80482 0.266491 7.16452 0.0999807C6.95163 0.0447692 6.79562 0.00796159 6.25202 0.00182698C5.55484 -0.00606037 4.96411 0.00445609 4.63015 0.180607C4.4075 0.298041 4.23605 0.560076 4.34088 0.574975C4.47007 0.593378 4.76259 0.659983 4.91779 0.887839C5.11849 1.18142 5.11118 1.84221 5.11118 1.84221C5.11118 1.84221 5.22657 3.66068 4.84222 3.88678C4.57814 4.0419 4.21655 3.72553 3.44056 2.27864C3.04322 1.53811 2.74257 0.7187 2.74257 0.7187C2.74257 0.7187 2.68488 0.566211 2.58168 0.484708C2.45655 0.385678 2.28104 0.354129 2.28104 0.354129L0.423525 0.366398C0.423525 0.366398 0.144817 0.375162 0.0424345 0.505741C-0.0485722 0.622299 0.0351215 0.862424 0.0351215 0.862424C0.0351215 0.862424 1.4896 4.53179 3.13585 6.38182C4.6464 8.0776 6.3609 7.9663 6.3609 7.9663H7.13771C7.13771 7.9663 7.37254 7.93825 7.49198 7.79891C7.60249 7.67096 7.59843 7.43083 7.59843 7.43083C7.59843 7.43083 7.58299 6.30645 8.06727 6.14081C8.54425 5.97781 9.15692 7.22752 9.80615 7.70864C10.2969 8.07234 10.6699 7.99259 10.6699 7.99259L12.4063 7.9663C12.4063 7.9663 13.3148 7.90583 12.8841 7.1355Z"
                          fill="#A07B50" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </SwiperSlide>
        })}
     
    </Swiper>
    </section>
  );
};

export default Reviews;