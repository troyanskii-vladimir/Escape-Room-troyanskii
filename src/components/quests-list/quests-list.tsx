import { useAppSelector } from '../../hooks';
import { getQuestsFiltered } from '../../store/quests-data/quest-data.selectors';

import QuestItem from '../quest-item/quest-item';


function QuestsList(): JSX.Element {
  const quests = useAppSelector(getQuestsFiltered);

  return (
    <div className="cards-grid">
      {
        quests.map((quest) => {
          return (
            <QuestItem
              key={quest.id}
              questData={quest}
            />
          );
        })
      }
    </div>
  );
}

export default QuestsList;
