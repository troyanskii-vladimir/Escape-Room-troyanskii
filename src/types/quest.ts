type Level = 'easy' | 'medium' | 'hard';

type Type = 'adventures' | 'horror' | 'mystic' | 'detective' | 'sci-fi';

export type QuestPreview = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Level;
  type: Type;
  peopleMinMax: [number];
}

export type QuestData = QuestPreview & {
  description: string;
  coverImg: string;
  coverImgWeb: string;
}
