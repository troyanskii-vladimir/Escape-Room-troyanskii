import { useAppSelector } from '../../hooks';
import { getReservations } from '../../store/quests-data/quest-data.selectors';

import QuestMyItem from '../quest-my-item/quest-item';


function QuestsMyList(): JSX.Element {
  const questsMy = useAppSelector(getReservations);

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
