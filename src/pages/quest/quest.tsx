import { Link, useParams } from 'react-router-dom';
import Auth from '../../components/auth/auth';
import Logo from '../../components/logo/logo';
import Navigation from '../../components/navigation/navigation';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { getQuestData, getQuestDataError } from '../../store/quests-data/quest-data.selectors';
import { fetchQuestBookingAction, fetchQuestDataAction } from '../../store/api-action';
import { AppRoute, SORT_LEVEL, SORT_TYPE } from '../../config';
import Footer from '../../components/footer/footer';
import Page404 from '../404/404';



function QuestPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const {id} = useParams();

  const quest = useAppSelector(getQuestData);
  const questDataError = useAppSelector(getQuestDataError);

  useEffect(() => {
    const needToGetData = quest.id !== id || Object.keys(quest).length === 0;

    if (needToGetData && id && !questDataError) {
      dispatch(fetchQuestDataAction(id));
      dispatch(fetchQuestBookingAction(id));
    }

  }, [id, questDataError])


  if (Object.keys(quest).length === 0 || !id) {
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
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet={`${quest.previewImgWebp}, ${quest.coverImgWebp} 2x`}
            />
            <img
              src={quest.previewImg}
              srcSet={`${quest.coverImg} 2x`}
              width={1366}
              height={768}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">
              {quest.title}
            </h1>
            <p className="subtitle quest-page__subtitle">
              <span className="visually-hidden">Жанр:</span>
              {
                SORT_TYPE.find((element) => element.type === quest.type)?.title
              }
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                {quest.peopleMinMax.at(0)}–{quest.peopleMinMax.at(-1)}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                {
                  SORT_LEVEL.find((element) => element.type === quest.level)?.title
                }
              </li>
            </ul>
            <p className="quest-page__description">
              {quest.description}
            </p>
            <Link
              className="btn btn--accent btn--cta quest-page__btn"
              to={`${AppRoute.Quest}/${id}${AppRoute.Booking}`}
            >
              Забронировать
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default QuestPage;
