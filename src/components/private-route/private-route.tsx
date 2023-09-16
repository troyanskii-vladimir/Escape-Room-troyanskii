import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../config';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/auth-data/auth-process.selectors';


type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

function PrivateRouteLogin({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Navigate to={AppRoute.Main} />
      : children
  );
}

export { PrivateRoute, PrivateRouteLogin };
