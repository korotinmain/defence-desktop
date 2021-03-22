export type ResourceType = {
  resourceType: string;
  flyingResource: number;
  firstFlying: number;
  modules: Array<ModuleType>;
  airplaneName: string;
};

export type ModuleType = {
  type: string;
  value: number;
  count: number;
  coefficient: number;
};
