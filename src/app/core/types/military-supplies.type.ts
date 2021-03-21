import {ModulesEnum} from '../enums/modules.enum';

export type MilitarySuppliesType = {
  airplaneName: string;
  modules: Array<{
    moduleName: ModulesEnum;
    coefficient: number;
  }>;
};
