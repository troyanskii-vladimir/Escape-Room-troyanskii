import { Link } from 'react-router-dom';
import { QuestPreview } from '../../types/quest';
import { AppRoute } from '../../config';
import { SORT_LEVEL } from '../../config';


type QuestItemProps = {
  questData: QuestPreview;
}

function QuestItem({questData}: QuestItemProps): JSX.Element {

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={questData.previewImgWebp}
          />
          <img
            src={questData.previewImg}
            srcSet={questData.previewImg}
            width={344}
            height={232}
            alt={questData.title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={`${AppRoute.Quest}/${questData.id}`}>
            {questData.title}
          </Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {questData.peopleMinMax.at(0)}–{questData.peopleMinMax.at(-1)}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {
              SORT_LEVEL.find((element) => element.type === questData.level)?.title
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuestItem;
