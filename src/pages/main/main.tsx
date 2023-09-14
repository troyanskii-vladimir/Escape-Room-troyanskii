import { useAppSelector } from '../../hooks';
import { getQuestsFiltered } from '../../store/quests-data/quest-data.selectors';

import Logo from '../../components/logo/logo';
import Navigation from '../../components/navigation/navigation';
import Auth from '../../components/auth/auth';
import FilterTypeList from '../../components/filter-type-list/filter-type-list';
import FilterLevelList from '../../components/filter-level-list/filter-level-list';
import QuestsList from '../../components/quests-list/quests-list';
import Footer from '../../components/footer/footer';


function MainPage(): JSX.Element {
  const quests = useAppSelector(getQuestsFiltered);

  return (
    <div className="wrapper">
      <header className="header">
        <div className="container container--size-l">
          <Logo />
          <Navigation />
          <Auth />
        </div>
      </header>
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">
              квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">
              Выберите тематику
            </h2>
          </div>
          <div className="page-content__item">
            <form className="filter" action="#" method="get">
              <FilterTypeList />
              <FilterLevelList />
            </form>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <QuestsList quests={quests} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
