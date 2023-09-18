import Logo from '../../components/logo/logo';
import Navigation from '../../components/navigation/navigation';
import Auth from '../../components/auth/auth';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../config';
import App from '../../components/app/app';

function Page404() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container container--size-l">
          <Logo />
          <Navigation />
          <Auth />
        </div>
      </header>
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-size-m.jpg"
              srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
              width={1366}
              height={768}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <p>Страница не найдена</p>
            <Link className="btn" to={AppRoute.Main}>
              На главную
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default Page404;
