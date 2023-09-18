import { useAppSelector } from '../../hooks';
import { getReservations } from '../../store/quests-data/quest-data.selectors';
import EmptyList from '../empty-list/empty-list';

import QuestMyItem from '../quest-my-item/quest-my-item';


function QuestsMyList(): JSX.Element {
  const questsMy = useAppSelector(getReservations);

  if (questsMy.length === 0) {
    return (
      <EmptyList />
    )
  }

  return (
    <div className="cards-grid">
      {
        questsMy.map((data) => {
          return (
            <QuestMyItem
              key={data.id}
              data={data}
            />
          );
        })
      }
    </div>
  );
}

export default QuestsMyList;
