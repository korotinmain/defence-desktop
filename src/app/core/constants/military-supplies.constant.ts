import {ModulesEnum} from '../enums/modules.enum';
import {MilitarySuppliesType} from '../types/military-supplies.type';
import {AirplanesEnum} from '../enums/airplanes.enum';

export const MILITARY_SUPPLIES: Array<MilitarySuppliesType> = [
  {
    airplaneName: AirplanesEnum.su27,
    modules: [
      {moduleName: ModulesEnum.r27r, coefficient: 2},
      {moduleName: ModulesEnum.r27er, coefficient: 2},
      {moduleName: ModulesEnum.r27et, coefficient: 2},
      {moduleName: ModulesEnum.r73kl, coefficient: 2},
      {moduleName: ModulesEnum.c8kom, coefficient: 1},
      {moduleName: ModulesEnum.c13, coefficient: 1},
      {moduleName: ModulesEnum.c24b, coefficient: 1},
      {moduleName: ModulesEnum.mm30, coefficient: 3.5},
    ],
  },
  {
    airplaneName: AirplanesEnum.mig29,
    modules: [
      {moduleName: ModulesEnum.r27r, coefficient: 2},
      {moduleName: ModulesEnum.r73kl, coefficient: 2},
      {moduleName: ModulesEnum.c8kom, coefficient: 1},
      {moduleName: ModulesEnum.c13, coefficient: 1},
      {moduleName: ModulesEnum.c24b, coefficient: 1},
      {moduleName: ModulesEnum.mm30, coefficient: 3.5},
    ],
  },
  {
    airplaneName: AirplanesEnum.su24m,
    modules: [
      {moduleName: ModulesEnum.r60m, coefficient: 1},
      {moduleName: ModulesEnum.x25mp, coefficient: 1},
      {moduleName: ModulesEnum.x29l, coefficient: 1},
      {moduleName: ModulesEnum.x58u, coefficient: 1},
      {moduleName: ModulesEnum.kab1500lpr, coefficient: 0.5},
      {moduleName: ModulesEnum.kab500l, coefficient: 0.5},
      {moduleName: ModulesEnum.fab500m54, coefficient: 2},
      {moduleName: ModulesEnum.fab500t, coefficient: 2},
      {moduleName: ModulesEnum.fab500m62, coefficient: 2},
      {moduleName: ModulesEnum.fab250m62, coefficient: 2},
      {moduleName: ModulesEnum.fab250m54, coefficient: 2},
      {moduleName: ModulesEnum.ofab250270, coefficient: 2},
      {moduleName: ModulesEnum.rbk500shoab05, coefficient: 2},
      {moduleName: ModulesEnum.rbk500ptab1, coefficient: 2},
      {moduleName: ModulesEnum.rbk250shoab, coefficient: 2},
      {moduleName: ModulesEnum.zab500sh, coefficient: 2},
      {moduleName: ModulesEnum.c8kom, coefficient: 0.5},
      {moduleName: ModulesEnum.c13, coefficient: 0.5},
      {moduleName: ModulesEnum.c24b, coefficient: 0.5},
      {moduleName: ModulesEnum.c25ofmpu, coefficient: 0.5},
      {moduleName: ModulesEnum.mm23, coefficient: 3},
    ],
  },
  {
    airplaneName: AirplanesEnum.su25,
    modules: [
      {moduleName: ModulesEnum.r60m, coefficient: 1},
      {moduleName: ModulesEnum.x25mp, coefficient: 1},
      {moduleName: ModulesEnum.x29l, coefficient: 1},
      {moduleName: ModulesEnum.fab500m54, coefficient: 2},
      {moduleName: ModulesEnum.fab500m62, coefficient: 2},
      {moduleName: ModulesEnum.fab250m62, coefficient: 2},
      {moduleName: ModulesEnum.fab250m54, coefficient: 2},
      {moduleName: ModulesEnum.ofab250270, coefficient: 2},
      {moduleName: ModulesEnum.rbk500shoab05, coefficient: 2},
      {moduleName: ModulesEnum.rbk500ptab1, coefficient: 2},
      {moduleName: ModulesEnum.rbk250shoab, coefficient: 2},
      {moduleName: ModulesEnum.zab500sh, coefficient: 2},
      {moduleName: ModulesEnum.c8kom, coefficient: 1},
      {moduleName: ModulesEnum.c13, coefficient: 1},
      {moduleName: ModulesEnum.c25ofmpu, coefficient: 1},
      {moduleName: ModulesEnum.mm30, coefficient: 3},
    ],
  },
  {
    airplaneName: AirplanesEnum.mi24p,
    modules: [
      {moduleName: ModulesEnum.fab250m54, coefficient: 2},
      {moduleName: ModulesEnum.fab250m62, coefficient: 2},
      {moduleName: ModulesEnum.ofab100120, coefficient: 2},
      {moduleName: ModulesEnum.ofab250270, coefficient: 2},
      {moduleName: ModulesEnum.rbk250shoab, coefficient: 2},
      {moduleName: ModulesEnum.rbk500shoab05, coefficient: 2},
      {moduleName: ModulesEnum.c8kom, coefficient: 2.5},
      {moduleName: ModulesEnum.c13, coefficient: 2.5},
      {moduleName: ModulesEnum.mm30, coefficient: 3},
    ],
  },
  {
    airplaneName: AirplanesEnum.mi8mt,
    modules: [
      {moduleName: ModulesEnum.fab250m54, coefficient: 2},
      {moduleName: ModulesEnum.fab250m62, coefficient: 2},
      {moduleName: ModulesEnum.ofab250270, coefficient: 2},
      {moduleName: ModulesEnum.ofab100120, coefficient: 2},
      {moduleName: ModulesEnum.rbk250shoab, coefficient: 2},
      {moduleName: ModulesEnum.c8kom, coefficient: 2.5},
    ],
  },
  {
    airplaneName: AirplanesEnum.ka27pch,
    modules: [
      {moduleName: ModulesEnum.fab250m54, coefficient: 2},
      {moduleName: ModulesEnum.fab250m62, coefficient: 2},
      {moduleName: ModulesEnum.ofab250270, coefficient: 2},
      {moduleName: ModulesEnum.ofab100120, coefficient: 2},
      {moduleName: ModulesEnum.rbk250shoab, coefficient: 2},
      {moduleName: ModulesEnum.c8kom, coefficient: 2.5},
    ],
  },
  {
    airplaneName: AirplanesEnum.ka29,
    modules: [
      {moduleName: ModulesEnum.ofab100120, coefficient: 1},
      {moduleName: ModulesEnum.c8kom, coefficient: 1},
      {moduleName: ModulesEnum.mm30, coefficient: 1},
    ],
  },
];
