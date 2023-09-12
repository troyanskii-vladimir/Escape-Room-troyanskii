import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main/main';
import ContactsPage from '../../pages/contacts/contacts';
import LoginPage from '../../pages/login/login';
import MyQuestsPage from '../../pages/my-quests/my-quests';
import QuestPage from '../../pages/quest/quest';
// import BookingPage from '../../pages/booking/booking';
import Page404 from '../../pages/404/404';

import { AppRoute, AuthorizationStatus } from '../../config';


function App() {
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
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <LoginPage />
              </PrivateRoute>
            }
          />

          <Route
            path={AppRoute.MyQuests}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <MyQuestsPage />
              </PrivateRoute>
            }
          />

          <Route path={AppRoute.Quest}>
            <Route index element={<Page404 />} />
            <Route path=':id' element={<QuestPage />} />
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
