import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useAppDispatch } from "../../hooks";
import { loginAction } from "../../store/api-action";
import { AppRoute } from "../../config";

import Logo from "../../components/logo/logo";
import Navigation from "../../components/navigation/navigation";
import Auth from "../../components/auth/auth";
import Footer from "../../components/footer/footer";
import styles from './login.module.css';


function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const regexLogin = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z0-9_-]+/;
  const regexPassword = /^(?=.*\d)(?=.*[a-z]).*$/;

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [isCorrectLogin, setIsCorrectLogin] = useState(true);
  const [isCorrectPassword, setIsCorrectPassword] = useState(true);
  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsCorrectLogin(true);
    setIsCorrectPassword(true);

    if (loginRef.current && passwordRef.current) {

      if (loginRef.current.value === '') {
        setIsCorrectLogin(false);
        setLoginError('Введите email');
        return;
      }

      if (passwordRef.current.value === '') {
        setIsCorrectPassword(false);
        setPasswordError('Введите пароль');
        return;
      }

      if (!regexLogin.test(loginRef.current.value.trim())) {
        setIsCorrectLogin(false);
        setLoginError('Введите корректный email');
        return;
      }

      if (passwordRef.current.value.length < 3 || passwordRef.current.value.length > 15) {
        setIsCorrectPassword(false);
        setPasswordError('Длина пароля должна составлять от 3 до 15 символов');
        return;
      }

      if (!regexPassword.test(passwordRef.current.value.trim())) {
        setIsCorrectPassword(false);
        setPasswordError('Пароль должен состоять минимум из одной буквы и цифры');
        return;
      }

      dispatch(loginAction({
        login: loginRef.current.value.trim(),
        password: passwordRef.current.value.trim(),
      }));

      navigate(AppRoute.Main);
    }
  };


  return (
    <div className="wrapper">
      <Helmet title='Логин' />
      <header className="header">
        <div className="container container--size-l">
          <Logo />
          <Navigation />
          <Auth layout='loginPage'/>
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
            <form
              className="login-form"
              action="https://echo.htmlacademy.ru/"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login-form__inner-wrapper">
                <h1 className="title title--size-s login-form__title">Вход</h1>
                <div className="login-form__inputs">
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="email">
                      E&nbsp;–&nbsp;mail
                    </label>
                    <input
                      ref={loginRef}
                      id="email"
                      name="email"
                      placeholder="Адрес электронной почты"
                    />
                    {
                      !isCorrectLogin &&
                      <span className={styles.error}>
                        {loginError}
                      </span>
                    }
                  </div>
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">
                      Пароль
                    </label>
                    <input
                      ref={passwordRef}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Пароль"
                    />
                    {
                      !isCorrectPassword &&
                      <span className={styles.error}>
                        {passwordError}
                      </span>
                    }
                  </div>
                </div>
                <button
                  className="btn btn--accent btn--general login-form__submit"
                  type="submit"
                >
                  Войти
                </button>
              </div>
              <label className="custom-checkbox login-form__checkbox">
                <input
                  type="checkbox"
                  id="id-order-agreement"
                  name="user-agreement"
                  required
                />
                <span className="custom-checkbox__icon">
                  <svg width={20} height={17} aria-hidden="true">
                    <use xlinkHref="#icon-tick" />
                  </svg>
                </span>
                <span className="custom-checkbox__label">
                  Я&nbsp;согласен с
                  <a className="link link--active-silver link--underlined" href="#">
                    правилами обработки персональных данных
                  </a>
                  &nbsp;и пользовательским соглашением
                </span>
              </label>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default LoginPage;
