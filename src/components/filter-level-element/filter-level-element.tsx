import { useAppSelector } from '../../hooks';
import { getActiveLevel } from '../../store/quests-data/quest-data.selectors';
import { Level } from '../../types/quest';

type FilterLevelElementProps = {
  type: Level;
  title: string;
  onLevelClick: (level: Level) => void;
}

function FilterLevelElement({type, title, onLevelClick}: FilterLevelElementProps): JSX.Element {
  const handleLevelClick = () => onLevelClick(type);

  return (
    <>
      <input
        type="radio"
        name="level"
        id={type}
        onChange={handleLevelClick}
        checked={(useAppSelector(getActiveLevel) === type)}
      />
      <label className="filter__label" htmlFor={type}>
        <span className="filter__label-text">{title}</span>
      </label>
    </>
  );
}

export default FilterLevelElement;
