import React from "react";
import './style.css'
import { Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MorePhotos = () => {
  const morePhotos = [
    {
      avatar:'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/865d2d0e-bac6-4a78-a0ed-17a87b285069/220x330',
      userName:'Фидрик Даник',
      level: 3,
      date:'22 мая 2023',
      reviewText: `Двигатель дымил и сильно ел масло. Исправили в считанные часы`,
      likes: 5,
      dislikes: '',
    },
    {
      avatar:'https://sun9-26.userapi.com/impg/c857228/v857228127/18dad4/NgaiFVMuacI.jpg?size=1280x853&quality=96&sign=136496e45824708bb9a6d2b276a1cc09&type=album',
      userName:'Степанчук Кирилл',
      level: 5,
      date:'15 апреля 2023',
      reviewText: `Лучший автосервис в городе. Весьма вежливый и добродушный персонал. Сделали всё быстро и качественно, без нареканий. Отдельное спасибо руководителю Валерию, решил возникшую проблемы в считанные минуты. Сервис класс рекомендую`,
      likes: 2,
      dislikes: 1,
    },{
      avatar:'https://stuki-druki.com/biofoto3/dwayne-johnson-01.jpg',
      userName:'Ерников Стас',
      level: 2,
      date:'3 февраля 2022',
      reviewText: `Хороший автосервис, отзывчивые специалисты,сделали быстро!Была проблема,постоянно в неожиданном месте глохла,и вконец намертво заглохла и для меня проблема найти автоэлектрика,многие в отказ.Спасибо им!`,
      likes: 4,
      dislikes: 2,
    },{
      avatar:'https://memepedia.ru/wp-content/uploads/2018/03/496277.jpg',
      userName:'Шумель Валерий',
      level: 10,
      date:'15 мая 2023',
      reviewText: `Отличный сервис 👌 Нужно было очень срочно реанимировать электрику в машине. Утром загнал - после обеда все было готово ✅`,
      likes: 14,
      dislikes: 4,
    },{
      avatar:'https://cdn.fishki.net/upload/post/2018/09/11/2700959/ee17f59608ad1c59fb1cc22d4bf0d2dd.jpg',
      userName:'Гаврилов Арсений',
      level: 2,
      date:'3 марта 2023',
      reviewText: `Добрый день ,сегодня провели ремонт кондиционера,быстро и оперативно нашли обрыв провода включения муфты. Там же и заправили систему по адекватной цене. Большое спасибо!`,
      likes: 5,
      dislikes: 3,
    },
    {
      avatar:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ponasenkov_2021.jpg/1200px-Ponasenkov_2021.jpg',
      userName:'Абрамов Артём',
      level: 6,
      date:'25 апреля 2023',
      reviewText: `Отличная работа!!!!!
Всем советую!!!
Качественно!!!!! Профессионально!!!!`,
      likes: 7,
      dislikes: 5,
    },
    

  ]

  return (
    <div className="more-photos">
      <h2 className="users-reviews">Отзывы</h2>
       <Swiper
       modules={[Autoplay]}
       loop ={true}
       speed={5000}
       autoplay={{
          delay: 1,
          enabled: true,
          disableOnInteraction: false,
        }}
      spaceBetween={50}
      slidesPerView={3}
    >
      {morePhotos.map((info)=>{
        return <SwiperSlide>
        <div>
          <div className="review-block">
            <div className="review-head">
              <img  className='review-ava'src={info.avatar} alt="" />
              <div className="review-user-info">
                <h4 className="review-name">
                  {info.userName}
                </h4>
                <span className="review-view-author">
                  Знаток города {info.level} уровня
                </span>
                <div className="review-rate">
                  <svg className="review-star" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#1aad2aca-aad4-4cb4-a170-824e9c2fae34)"><path fill-rule="yellow" clip-rule="evenodd" d="M5.987 9.42l-3.26 1.991a.48.48 0 0 1-.715-.526l.945-3.764-2.74-2.133A.48.48 0 0 1 .47 4.13l3.586-.295L5.552.348a.48.48 0 0 1 .883.001l1.483 3.486 3.61.296a.48.48 0 0 1 .255.857L9.031 7.121l.943 3.766a.48.48 0 0 1-.715.527L5.987 9.419v.001z" fill="yellow"></path></g><defs><clipPath id="1aad2aca-aad4-4cb4-a170-824e9c2fae34"><path fill="yellow" d="M0 0h12v12H0z"></path></clipPath></defs></svg>
                  <svg className="review-star" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#1aad2aca-aad4-4cb4-a170-824e9c2fae34)"><path fill-rule="yellow" clip-rule="evenodd" d="M5.987 9.42l-3.26 1.991a.48.48 0 0 1-.715-.526l.945-3.764-2.74-2.133A.48.48 0 0 1 .47 4.13l3.586-.295L5.552.348a.48.48 0 0 1 .883.001l1.483 3.486 3.61.296a.48.48 0 0 1 .255.857L9.031 7.121l.943 3.766a.48.48 0 0 1-.715.527L5.987 9.419v.001z" fill="yellow"></path></g><defs><clipPath id="1aad2aca-aad4-4cb4-a170-824e9c2fae34"><path fill="yellow" d="M0 0h12v12H0z"></path></clipPath></defs></svg>
                  <svg className="review-star" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#1aad2aca-aad4-4cb4-a170-824e9c2fae34)"><path fill-rule="yellow" clip-rule="evenodd" d="M5.987 9.42l-3.26 1.991a.48.48 0 0 1-.715-.526l.945-3.764-2.74-2.133A.48.48 0 0 1 .47 4.13l3.586-.295L5.552.348a.48.48 0 0 1 .883.001l1.483 3.486 3.61.296a.48.48 0 0 1 .255.857L9.031 7.121l.943 3.766a.48.48 0 0 1-.715.527L5.987 9.419v.001z" fill="yellow"></path></g><defs><clipPath id="1aad2aca-aad4-4cb4-a170-824e9c2fae34"><path fill="yellow" d="M0 0h12v12H0z"></path></clipPath></defs></svg>
                  <svg className="review-star" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#1aad2aca-aad4-4cb4-a170-824e9c2fae34)"><path fill-rule="yellow" clip-rule="evenodd" d="M5.987 9.42l-3.26 1.991a.48.48 0 0 1-.715-.526l.945-3.764-2.74-2.133A.48.48 0 0 1 .47 4.13l3.586-.295L5.552.348a.48.48 0 0 1 .883.001l1.483 3.486 3.61.296a.48.48 0 0 1 .255.857L9.031 7.121l.943 3.766a.48.48 0 0 1-.715.527L5.987 9.419v.001z" fill="yellow"></path></g><defs><clipPath id="1aad2aca-aad4-4cb4-a170-824e9c2fae34"><path fill="yellow" d="M0 0h12v12H0z"></path></clipPath></defs></svg>
                  <svg className="review-star" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#1aad2aca-aad4-4cb4-a170-824e9c2fae34)"><path fill-rule="yellow" clip-rule="evenodd" d="M5.987 9.42l-3.26 1.991a.48.48 0 0 1-.715-.526l.945-3.764-2.74-2.133A.48.48 0 0 1 .47 4.13l3.586-.295L5.552.348a.48.48 0 0 1 .883.001l1.483 3.486 3.61.296a.48.48 0 0 1 .255.857L9.031 7.121l.943 3.766a.48.48 0 0 1-.715.527L5.987 9.419v.001z" fill="yellow"></path></g><defs><clipPath id="1aad2aca-aad4-4cb4-a170-824e9c2fae34"><path fill="yellow" d="M0 0h12v12H0z"></path></clipPath></defs></svg>
                  
                  <span className="review-date">{info.date}</span>
                  </div>
                </div>
            </div>
              <p className="review-text scrollbar">{info.reviewText}</p>
            <div className="like-dis">
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.617 13.3c-.337 1.018-1.318 1.774-2.38 1.692l-4.64-.693a1.045 1.045 0 0 1-.88-.896l-.663-4.99c-.04-.307.021-.617.176-.884.403-.699 1.211-2.108 1.572-2.805.573-1.105 1.585-3.339 1.585-3.339A.58.58 0 0 1 8.932 1c2.187 0 1.642 2.436.711 5.59h3.205c1.994 0 2.439 1.726 1.994 3.07l-1.225 3.64zM1.557 15A.557.557 0 0 1 1 14.442l.01-6.612c0-.307.25-.556.557-.556h1.197c.282 0 .52.21.553.49l.794 6.612a.557.557 0 0 1-.554.624h-2z" fill="#878787"></path></svg>
              <span className="like-dis-counter">{info.likes}</span>
              <svg className="svgshka" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.617 13.3c-.337 1.018-1.318 1.774-2.38 1.692l-4.64-.693a1.045 1.045 0 0 1-.88-.896l-.663-4.99c-.04-.307.021-.617.176-.884.403-.699 1.211-2.108 1.572-2.805.573-1.105 1.585-3.339 1.585-3.339A.58.58 0 0 1 8.932 1c2.187 0 1.642 2.436.711 5.59h3.205c1.994 0 2.439 1.726 1.994 3.07l-1.225 3.64zM1.557 15A.557.557 0 0 1 1 14.442l.01-6.612c0-.307.25-.556.557-.556h1.197c.282 0 .52.21.553.49l.794 6.612a.557.557 0 0 1-.554.624h-2z" fill="#878787"></path></svg>
              <span className="like-dis-counter">{info.dislikes}</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      })}
      
      
      {/* <SwiperSlide><img className="img-rev" src="https://green-auto.ru/image/catalog/feedback/green-avto-otzyv-anton-n-10042019.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className="img-rev" src="https://green-auto.ru/image/catalog/feedback/green-avto-otzyv-marina-o-23112018.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className="img-rev" src="https://green-auto.ru/image/catalog/feedback/green-avto-otzyv-dmitriy-d-14042019.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className="img-rev" src="https://green-auto.ru/image/catalog/feedback/green-avto-otzyv-sergey-u-24032019.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className="img-rev" src="https://green-auto.ru/image/catalog/feedback/green-avto-otzyv-anton-z-10102018.png" alt="" /></SwiperSlide> */}
      
      
     
    </Swiper>
    </div>
  );
};

export default MorePhotos;