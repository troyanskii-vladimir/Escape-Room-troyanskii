import Auth from '../../components/auth/auth';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import Navigation from '../../components/navigation/navigation';
import PageDecor from '../../components/page-decor/page-decor';
import QuestsMyList from '../../components/quests-my-list/quests-my-list';


function MyQuestsPage() {

  return (
    <div className="wrapper">
      <header className="header">
        <div className="container container--size-l">
          <Logo />
          <Navigation layout='favorites' />
          <Auth />
        </div>
      </header>
      <main className="page-content decorated-page">
        <PageDecor />
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">
              Мои бронирования
            </h1>
          </div>
          <QuestsMyList />
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default MyQuestsPage;
