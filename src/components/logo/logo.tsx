import { Link } from 'react-router-dom';
import { AppRoute } from '../../config';


function Logo(): JSX.Element {
  return (
    <Link className="logo header__logo" to={AppRoute.Main}>
      <svg width={134} height={52} aria-hidden="true">
        <use xlinkHref="#logo" />
      </svg>
    </Link>
  );
}

export default Logo;
