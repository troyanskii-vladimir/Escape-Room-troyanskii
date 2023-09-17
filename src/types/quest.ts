export type Level = 'any' | 'easy' | 'medium' | 'hard';

export type Type = 'all' | 'adventures' | 'horror' | 'mystic' | 'detective' | 'sci-fi';

export type QuestPreview = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Level;
  type: Type;
  peopleMinMax: number[];
}

export type QuestData = QuestPreview & {
  description: string;
  coverImg: string;
  coverImgWebp: string;
}
