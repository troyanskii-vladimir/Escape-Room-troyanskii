import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/auth-data/auth-process.selectors';
import { AppRoute, AuthorizationStatus } from '../../config';
import { logoutAction } from '../../store/api-action';


function Auth(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <div className="header__side-nav">
      {
        authorizationStatus === AuthorizationStatus.Auth &&
        <Link
          className="btn btn--accent header__side-item"
          to={AppRoute.Main}
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
          Выйти
        </Link>
      }
      {
        authorizationStatus !== AuthorizationStatus.Auth &&
        <Link className="btn header__login-btn header__side-item" to={AppRoute.Login}>
          Вход
        </Link>
      }
      <a
        className="link header__side-item header__phone-link"
        href="tel:88003335599"
      >
        8 (000) 111-11-11
      </a>
    </div>
  );
}

export default Auth;
