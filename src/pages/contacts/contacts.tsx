import Auth from '../../components/auth/auth';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import Navigation from '../../components/navigation/navigation';
import PageDecor from '../../components/page-decor/page-decor';


function ContactsPage() {

  return (
    <div className="wrapper">
      <header className="header">
        <div className="container container--size-l">
          <Logo />
          <Navigation layout='contacts' />
          <Auth />
        </div>
      </header>
      <main className="page-content decorated-page">
        <PageDecor />
        <div className="container">
          <div className="page-content__title-wrapper page-content__title-wrapper--underlined">
            <p className="subtitle page-content__subtitle">
              квесты в&nbsp;Санкт-Петербурге
            </p>
            <h1 className="title title--size-m page-content__title">Контакты</h1>
          </div>
          <div className="contacts">
            <dl className="contacts__list">
              <div className="contacts__item">
                <dt className="contacts__dt">Адрес</dt>
                <dd className="contacts__dd">
                  <address className="contacts__address">
                    Санкт-Петербург,
                    <br /> Набережная реки Карповка, д 5П
                  </address>
                </dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">Режим работы</dt>
                <dd className="contacts__dd">
                  Ежедневно, с&nbsp;10:00 до&nbsp;22:00
                </dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">Телефон</dt>
                <dd className="contacts__dd">
                  <a className="link" href="tel:88003335599">
                    8 (000) 111-11-11
                  </a>
                </dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">E–mail</dt>
                <dd className="contacts__dd">
                  <a className="link" href="mailto:info@escape-room.ru">
                    info@escape-room.ru
                  </a>
                </dd>
              </div>
            </dl>
            <div className="contacts__map">
              <div className="map">
                <div className="map__container" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default ContactsPage;
