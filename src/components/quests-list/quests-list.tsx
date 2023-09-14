import { QuestPreview } from '../../types/quest';
import QuestItem from '../quest-item/quest-item';


type QuestsListProps = {
  quests: QuestPreview[];
};

function QuestsList({quests}: QuestsListProps): JSX.Element {
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
