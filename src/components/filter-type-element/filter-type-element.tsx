import { useAppSelector } from '../../hooks';
import { getActiveType } from '../../store/quests-data/quest-data.selectors';
import { Type } from '../../types/quest';

type FilterTypeElementProps = {
  type: Type;
  title: string;
  onTypeClick: (type: Type) => void;
}

function FilterTypeElement({type, title, onTypeClick}: FilterTypeElementProps): JSX.Element {
  const handleTypeClick = () => onTypeClick(type);

  return (
    <>
      <input
        type="radio"
        name="type"
        id={type}
        onChange={handleTypeClick}
        checked={(useAppSelector(getActiveType) === type)}
      />
      <label className="filter__label" htmlFor={type}>
        <svg
          className="filter__icon"
          width={28}
          height={30}
          aria-hidden="true"
        >
          <use xlinkHref={`#icon-${type}`} />
        </svg>
        <span className="filter__label-text">{title}</span>
      </label>
    </>
  );
}

export default FilterTypeElement;
