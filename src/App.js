

function App() {
  return (
      <>
        <header className="header">
          <div className="container">
            <div className="header__inner">
              <a className="logo" href="#">
                <img className="logo__link" src="images/logo.svg" alt="logo" />
              </a>
              <nav className="menu">
                <button className="menu__btn"></button>
                <ul className="menu__list">
                  <li className="menu__item"><a className="menu__list-link" href="#">О НАС</a></li>
                  <li className="menu__item"><a className="menu__list-link" href="#">АВТОПАРК</a></li>
                  <li className="menu__item"><a className="menu__list-link" href="#">ОТЗЫВЫ</a></li>
                  <li className="menu__item"><a className="menu__list-link" href="#">УСЛОВИЯ</a></li>
                  <li className="menu__item"><a className="menu__list-link" href="#">КОНТАКТЫ</a></li>
                </ul>
              </nav>
              <a className="phone" href="tel:380999999090">+38 (099) 999 90 90</a>
            </div>
          </div>
        </header>

        <section className="top">
          <div className="container">
            <div className="top__heading">
              <div className="top__content">
                <h1 className="top__title">
                  Каршеринг в Киеве
                  LUX автомобили
                </h1>
                <p className="top__text">
                  Закажи эксклюзивный автомобиль через мобильное приложение в любой
                  точке города
                </p>
                <a className="application-btn" href="#">Скачать приложение</a>
              </div>
              <div className="top__slider">
                <div className="top__slider-item">
                  <img className="top__slider-images" src="images/slider-img.png" alt="" />
                    <p className="top__slider-text">
                      <span>4 грн/мин</span> <span>5 мест</span>
                      <span>50 тыс. км пробег</span>
                    </p>
                </div>
                <div className="top__slider-item">
                  <img className="top__slider-images" src="images/slider-img.png" alt="" />
                    <p className="top__slider-text">
                      <span>4 грн/мин</span> <span>5 мест</span>
                      <span>50 тыс. км пробег</span>
                    </p>
                </div>
                <div className="top__slider-item">
                  <img className="top__slider-images" src="images/slider-img.png" alt="" />
                    <p className="top__slider-text">
                      <span>4 грн/мин</span> <span>5 мест</span>
                      <span>50 тыс. км пробег</span>
                    </p>
                </div>
                <div className="top__slider-item">
                  <img className="top__slider-images" src="images/slider-img.png" alt="" />
                    <p className="top__slider-text">
                      <span>4 грн/мин</span> <span>5 мест</span>
                      <span>50 тыс. км пробег</span>
                    </p>
                </div>
                <div className="top__slider-item">
                  <img className="top__slider-images" src="images/slider-img.png" alt="" />
                    <p className="top__slider-text">
                      <span>4 грн/мин</span> <span>5 мест</span>
                      <span>50 тыс. км пробег</span>
                    </p>
                </div>
                <div className="top__slider-item">
                  <img className="top__slider-images" src="images/slider-img.png" alt="" />
                    <p className="top__slider-text">
                      <span>4 грн/мин</span> <span>5 мест</span>
                      <span>50 тыс. км пробег</span>
                    </p>
                </div>
              </div>
            </div>
            <div className="top__bottom">
              <div className="top__items">
                <div className="top__item">
                  <img className="top__item-img" src="images/icon-1.svg" alt="" />
                    <p className="top__item-text">
                      Более 300 автомобилей
                      в вашем распоряжении
                    </p>
                </div>
                <div className="top__item">
                  <img className="top__item-img" src="images/icon-2.svg" alt="" />
                    <p className="top__item-text">
                      Дешевле такси и собственного автомобиля
                    </p>
                </div>
                <div className="top__item">
                  <img className="top__item-img" src="images/icon-3.svg" alt="" />
                    <p className="top__item-text">
                      Лучшие автомобили в любой точке города
                    </p>
                </div>
              </div>
              <div className="top__links">
                <a className="top__link" href="#">Условия аренды автомобиля</a>
                <a className="top__link" href="#">Публичный договор</a>
              </div>
            </div>
          </div>
        </section>

        <section className="rent">
          <div className="container">
            <div className="rent__inner">
              <div className="rent__content">
                <h3 className="rent__title">
                  Условия аренды автомобиля
                </h3>
                <p className="rent__text">
                  Мы ценим каждого клиента и <br />
                  предоставляем качественный
                  сервис каршеринга в Киеве.
                </p>
                <p className="rent__text">
                  Именно для того, что бы Вам
                  было приятно и безопасно пользоваться
                  нашим сервисом на постоянной основе,
                  мы выделили несколько условий для того,
                  чтобы взять машину в аренду
                </p>
                <a className="application-btn" href="#">Скачать приложение</a>
              </div>
              <div className="rent__item">
                <div className="rent__item-num">01</div>
                <p className="rent__item-title">
                  Опыт вождения <br /> от 2х лет
                </p>
                <p className="rent__item-text">
                  Для того, чтобы арендовать автомобиль,
                  Вам необходимо зарегестрировать свои прав
                  в нашем мобильном приложении
                </p>
              </div>
              <div className="rent__item">
                <div className="rent__item-num">02</div>
                <p className="rent__item-title">
                  Только по Киеву
                </p>
                <p className="rent__item-text">
                  Наши автомобили работают только
                  в пределах города Киев. За город
                  на наших автомобилях, к сожалению,
                  выезжать нельзя.
                </p>
              </div>
              <div className="rent__item">
                <div className="rent__item-num">03</div>
                <p className="rent__item-title">
                  Мобильный телефон и интернет
                </p>
                <p className="rent__item-text">
                  Для использования нашего сервиса
                  Вам необходим мобильный телефон и интернет.
                  Бронирование, оплата и вся отчетность происходит онлайн
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="container">
            <h3 className="benefits__title">
              Преимущества
            </h3>
            <div className="benefits__items">
              <ul className="benefits__list">
                <li className="benefits__list-item">мойка авто каждую неделю</li>
                <li className="benefits__list-item">премиум автомобили</li>
                <li className="benefits__list-item">мощный двигатель</li>
                <li className="benefits__list-item">поддержка 24/7</li>
                <li className="benefits__list-item">бензин за наш счет</li>
                <li className="benefits__list-item">парковка по всему городу</li>
                <li className="benefits__list-item">каждый месяц ТО автомобиля</li>
              </ul>
              <img className="benefits__images" src="images/benefits.png" alt="" />
                <div className="benefits__content">
                  <p className="benefits__text">
                    Вы можете выбрать один из 300 наших
                    автомобилей, насладиться сервисом,
                    повысить уровень жизни, не покупая
                    дорогой автомобиль, успевать везде и
                    каждый день ездить на новом премиум
                    автомобиле.
                  </p>
                  <p className="benefits__text">
                    Посмотрите видео презентацию
                    нашего сервиса и выберите
                    автомобиль уже сейчас!
                  </p>
                  <a className="video-popup" data-fancybox href="#">
                    ПОСМОТРЕТЬ <br />
                    ПРЕЗЕНТАЦИЮ
                  </a>
                </div>
            </div>
          </div>
        </section>

        <section className="reviews">
          <div className="container">
            <h3 className="reviews__title">
              ОТЗЫВЫ
            </h3>
            <div className="reviews__slider">
              <div className="reviews__item">
                <p className="reviews__item-name">
                  Михаил, 28 лет
                </p>
                <p className="reviews__item-text">
                  Очень рад, что Вы есть!
                  Пока еще бэху купить не могу,
                  но покататься взять - это
                  отличная возможность!
                  Такое ощущение, что у меня
                  личный огромный автопарк
                  элитных тачек)))
                </p>
              </div>
              <div className="reviews__item">
                <p className="reviews__item-name">
                  Инна, 35 лет
                </p>
                <p className="reviews__item-text">
                  Очень радует Ваш сервис.
                  Встречаю ВИП клиентов
                  всегда только на Ваших
                  машинах. Удобно, что расчет по
                  минутам, это экономит бюджет компании.
                </p>
              </div>
              <div className="reviews__item">
                <p className="reviews__item-name">
                  Игорь, 25 лет
                </p>
                <p className="reviews__item-text">
                  Ребята, Вы ТОПЧИК!
                  Брал машину на свидание,
                  покатал девушку, она в
                  восторге, я доволен, все
                  счастливы)
                </p>
              </div>
              <div className="reviews__item">
                <p className="reviews__item-name">
                  Марина, 30 лет
                </p>
                <p className="reviews__item-text">
                  Люблю Ваш сервис. Не люблю
                  такси. В приложении быстро
                  нахожу машину поблизости.
                  Всегда чистая, свежая,
                  приятно садиться в нее. До
                  работы или на шопинг еду с
                  комфортом.
                </p>
              </div>
              <div className="reviews__item">
                <p className="reviews__item-name">
                  Инна, 35 лет
                </p>
                <p className="reviews__item-text">
                  Очень радует Ваш сервис.
                  Встречаю ВИП клиентов
                  всегда только на Ваших
                  машинах. Удобно, что расчет по
                  минутам, это экономит бюджет компании.
                </p>
              </div>
              <div className="reviews__item">
                <p className="reviews__item-name">
                  Игорь, 25 лет
                </p>
                <p className="reviews__item-text">
                  Ребята, Вы ТОПЧИК!
                  Брал машину на свидание,
                  покатал девушку, она в
                  восторге, я доволен, все
                  счастливы)
                </p>
              </div>
              <div className="reviews__item">
                <p className="reviews__item-name">
                  Марина, 30 лет
                </p>
                <p className="reviews__item-text">
                  Люблю Ваш сервис. Не люблю
                  такси. В приложении быстро
                  нахожу машину поблизости.
                  Всегда чистая, свежая,
                  приятно садиться в нее. До
                  работы или на шопинг еду с
                  комфортом.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="feedback">
          <div className="container">
            <div className="feedback__inner">
              <img className="feedback__images" src="images/feedback-images.png" alt="" />
                <form className="feedback__form" action="">
                  <h3 className="feedback__title">
                    Остались вопросы?
                  </h3>
                  <p className="feedback__text">
                    Мы перезвоним Вам и проконсультируем по любому вопросу
                  </p>
                  <input className="feedback__input" type="text" placeholder="Имя" />
                    <input className="feedback__input" type="text" placeholder="Телефон" />
                      <button className="feedback__btn" type="submit">ОСТАВИТЬ ЗАЯВКУ</button>
                </form>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer__top">
              <a className="application-btn" href="#">Скачать приложение</a>
              <nav className="menu">
                <ul className="menu__list">
                  <li className="menu__item"><a className="menu__list-link" href="#">О НАС</a></li>
                  <li className="menu__item"><a className="menu__list-link" href="#">АВТОПАРК</a></li>
                  <li className="menu__item"><a className="menu__list-link" href="#">ОТЗЫВЫ</a></li>
                  <li className="menu__item"><a className="menu__list-link" href="#">УСЛОВИЯ</a></li>
                  <li className="menu__item"><a className="menu__list-link" href="#">КОНТАКТЫ</a></li>
                </ul>
              </nav>
              <a className="phone" href="tel:380999999090">+38 (099) 999 90 90</a>
            </div>
            <ul className="footer__social">
              <li className="footer__social-item"><a className="footer__social-link" href="#">
                <img className="footer__social-img" src="images/facebook.svg" alt="" />
              </a></li>
              <li className="footer__social-item"><a className="footer__social-link" href="#">
                <img className="footer__social-img" src="images/instagram.svg" alt="" />
              </a></li>
              <li className="footer__social-item"><a className="footer__social-link" href="#">
                <img className="footer__social-img" src="images/youtube.svg" alt="" />
              </a></li>
            </ul>
          </div>
        </footer>
      </>
  );
}

export default App;
