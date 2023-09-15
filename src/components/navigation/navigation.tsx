import { Link, useParams } from 'react-router-dom';

import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/auth-data/auth-process.selectors';
import { AppRoute, AuthorizationStatus } from '../../config';


type NavigationProps = {
  layout: 'main' | 'contacts' | 'favorites';
}

function Navigation({layout}: NavigationProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <Link className={`link ${layout === 'main' ? 'active' : 'not-disabled'}`} to={AppRoute.Main}>
            Квесты
          </Link>
        </li>
        <li className="main-nav__item">
          <Link className={`link ${layout === 'contacts' ? 'active' : ''}`} to={AppRoute.Contacts}>
            Контакты
          </Link>
        </li>
        {
          authorizationStatus === AuthorizationStatus.Auth &&
          <li className="main-nav__item">
            <Link className={`link ${layout === 'favorites' ? 'active' : ''}`} to={AppRoute.MyQuests}>
              Мои бронирования
            </Link>
          </li>
        }

      </ul>
    </nav>
  );
}

export default Navigation;
