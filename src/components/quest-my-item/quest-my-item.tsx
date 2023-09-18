import { Link } from 'react-router-dom';
import { AppRoute } from '../../config';
import { SORT_LEVEL } from '../../config';
import { useAppDispatch } from '../../hooks/index';
import { deleteReservationAction } from '../../store/api-action';
import { clearReservationItem } from '../../store/quests-data/quest-data.slice';
import { Reservation } from '../../types/reservation';


type QuestMyItemProps = {
  data: Reservation;
}

function QuestMyItem({data}: QuestMyItemProps): JSX.Element {
  const dayDate = data.date === 'today' ? 'сегодня' : 'завтра';
  const dispatch = useAppDispatch();

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={data.quest.previewImgWebp}
          />
          <img
            src={data.quest.previewImg}
            srcSet={data.quest.previewImg}
            width={344}
            height={232}
            alt={data.quest.title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={`${AppRoute.Quest}/${data.quest.id}`}>
            {data.quest.title}
          </Link>
          <span className="quest-card__info">
            [{dayDate},&nbsp;{data.time}. {data.location.address}]
          </span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {data.peopleCount}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {
              SORT_LEVEL.find((element) => element.type === data.quest.level)?.title
            }
          </li>
        </ul>
        <button
          className="btn btn--accent btn--secondary quest-card__btn"
          type="button"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(deleteReservationAction({reservationId: data.id}));
            dispatch(clearReservationItem(data.id));
          }}
        >
          Отменить
        </button>
      </div>
    </div>
  );
}

export default QuestMyItem;
