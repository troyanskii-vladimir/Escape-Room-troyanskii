import { useAppSelector } from '../../hooks';
import { getQuestsFiltered } from '../../store/quests-data/quest-data.selectors';
import EmptyList from '../empty-list/empty-list';

import QuestItem from '../quest-item/quest-item';


function QuestsList(): JSX.Element {
  const quests = useAppSelector(getQuestsFiltered);

  if (quests.length === 0) {
    return (
      <EmptyList />
    )
  }

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
