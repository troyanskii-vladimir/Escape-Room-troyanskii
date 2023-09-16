import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { PrivateRoute, PrivateRouteLogin } from '../private-route/private-route';
import MainPage from '../../pages/main/main';
import ContactsPage from '../../pages/contacts/contacts';
import LoginPage from '../../pages/login/login';
import MyQuestsPage from '../../pages/my-quests/my-quests';
import QuestPage from '../../pages/quest/quest';
import BookingPage from '../../pages/booking/booking';
import Page404 from '../../pages/404/404';
import Loader from '../loader/loader';

import { AppRoute, AuthorizationStatus } from '../../config';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getStatusLoading } from '../../store/quests-data/quest-data.selectors';
import { useEffect } from 'react';
import { checkAuthAction, fetchQuestAction, fetchReservationAction } from '../../store/api-action';
import { getAuthorizationStatus } from '../../store/auth-data/auth-process.selectors';
import { clearReservation } from '../../store/quests-data/quest-data.slice';


function App() {
  const dispatch = useAppDispatch();

  const isQuestsDataLoading = useAppSelector(getStatusLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Unknown) {
      dispatch(checkAuthAction());
    }
  }, [authorizationStatus]);


  useEffect(() => {
    dispatch(fetchQuestAction());
  }, []);


  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchReservationAction());
    } else {
      dispatch(clearReservation());
    }
  }, [authorizationStatus]);


  if (isQuestsDataLoading || authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <Loader />
    );
  }


  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>

          <Route
            path={AppRoute.Main}
            element={
              <MainPage />
            }
          />

          <Route
            path={AppRoute.Login}
            element={
              <PrivateRouteLogin>
                <LoginPage />
              </PrivateRouteLogin>
            }
          />

          <Route
            path={AppRoute.MyQuests}
            element={
              <PrivateRoute>
                <MyQuestsPage />
              </PrivateRoute>
            }
          />

          <Route path={AppRoute.Quest}>
            <Route index element={<Page404 />} />
            <Route path=':id' element={<QuestPage />} />
            <Route
              path={`:id${AppRoute.Booking}`}
              element={
                <PrivateRoute>
                  <BookingPage />
                </PrivateRoute>
              }
            />
          </Route>


          <Route
            path={AppRoute.Contacts}
            element={
              <ContactsPage />
            }
          />

          <Route
            path='*'
            element={<Page404 />}
          />

        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App;
