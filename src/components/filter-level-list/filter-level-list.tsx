import { SORT_LEVEL } from '../../config';
import { useAppDispatch } from '../../hooks';
import { Level } from '../../types/quest';
import { changeActiveQuests, changeLevelFilter } from '../../store/quests-data/quest-data.slice';

import FilterLevelElement from '../filter-level-element/filter-level-element';


function FilterLevelList(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleLevelClick = (type: Level) => {
    dispatch(changeLevelFilter(type));
    dispatch(changeActiveQuests());
  }

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        {
          SORT_LEVEL.map((element) => {
            return (
              <li className="filter__item" key={element.type}>
                <FilterLevelElement
                  type={element.type}
                  title={element.title}
                  onLevelClick={handleLevelClick}
                />
              </li>
            );
          })
        }
      </ul>
    </fieldset>
  );
}

export default FilterLevelList;
