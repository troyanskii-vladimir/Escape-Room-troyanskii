import { SORT_TYPE } from '../../config';
import FilterTypeElement from '../filter-type-element/filter-type-element';
import { useAppDispatch } from '../../hooks';
import { Type } from '../../types/quest';
import { changeActiveQuests, changeTypeFilter } from '../../store/quests-data/quest-data.slice';


function FilterTypeList(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleTypeClick = (type: Type) => {
    dispatch(changeTypeFilter(type));
    dispatch(changeActiveQuests());
  }

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        {
          SORT_TYPE.map((element) => {
            return (
              <li className="filter__item" key={element.type}>
                <FilterTypeElement
                  type={element.type}
                  title={element.title}
                  onTypeClick={handleTypeClick}
                />
              </li>
            );
          })
        }
      </ul>
    </fieldset>
  );
}

export default FilterTypeList;
