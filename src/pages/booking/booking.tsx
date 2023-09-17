import { useEffect } from 'react';
import Auth from '../../components/auth/auth';
import Logo from '../../components/logo/logo';
import Navigation from '../../components/navigation/navigation';
import PageDecor from '../../components/page-decor/page-decor';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getQuestBookingData, getQuestBookingPlaceId, getQuestData, getQuestDataError } from '../../store/quests-data/quest-data.selectors';
import { fetchQuestBookingAction, fetchQuestDataAction } from '../../store/api-action';
import Page404 from '../404/404';
import Map from '../../components/map/map';
import Footer from '../../components/footer/footer';
import BookingForm from '../../components/booking-form/booking-form';

function BookingPage() {
  const dispatch = useAppDispatch();

  const {id} = useParams();

  const quest = useAppSelector(getQuestData);
  const questDataError = useAppSelector(getQuestDataError);
  const bookingData = useAppSelector(getQuestBookingData);
  const selectedId = useAppSelector(getQuestBookingPlaceId);


  useEffect(() => {
    const needToGetData = quest.id !== id || Object.keys(quest).length === 0 || Object.keys(bookingData).length === 0;

    if (needToGetData && id && !questDataError) {
      dispatch(fetchQuestDataAction(id));
      dispatch(fetchQuestBookingAction(id));
    }
  }, [dispatch])


  if (Object.keys(quest).length === 0 || Object.keys(bookingData).length === 0 || !id) {
    return <Page404 />;
  }

  return (
    <div className="wrapper">
      <header className="header">
        <div className="container container--size-l">
          <Logo />
          <Navigation />
          <Auth />
        </div>
      </header>
      <main className="page-content decorated-page">
        <PageDecor />
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">
              Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">
              {quest.title}
            </p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <Map />
              </div>
              <p className="booking-map__address">
                Вы&nbsp;выбрали: {bookingData.find((place) => place.id === selectedId)?.location.address}
              </p>
            </div>
          </div>
          <BookingForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default BookingPage;
