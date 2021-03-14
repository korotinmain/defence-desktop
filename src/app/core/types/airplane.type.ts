export type AirplaneType = {
  airplaneName: string;
  airplaneControlName: string;
  outfitGroups: Array<OutfitGroupType>;
};

export type OutfitGroupType = {
  groupName: string;
  groupControlName: string;
  outfits: Array<OutfitType>;
};

export type OutfitType = {
  control: string;
  values: Array<string>;
};
