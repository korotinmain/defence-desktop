export type ResourceType = {
  resourceType: string;
  flyingResource: number;
  firstFlying: number;
  modules: Array<ModuleType>;
};

export type ModuleType = {
  type: string;
  value: number;
  count: number;
};
