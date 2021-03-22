import {AirplaneType} from '../types/airplane.type';
import {AVIATION_BOMBS_VALUES, UNCORRECTED_AVIATION_ROCKETS_VALUES} from './outfit-values.constant';
import {GroupNameEnum} from '../enums/group-name.enum';
import {AirplanesEnum} from '../enums/airplanes.enum';
import {ModulesEnum} from '../enums/modules.enum';

export const AIRPLANES_DATA: Array<AirplaneType> = [
  {
    airplaneName: AirplanesEnum.su27,
    airplaneControlName: 'su27',
    outfitGroups: [
      {
        groupName: 'КАР класу \'повітря-повітря\'. од.',
        groupControlName: GroupNameEnum.air_air,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.r27r, ModulesEnum.r27er]},
          {control: 'control_1', values: [ModulesEnum.r27et]},
          {control: 'control_2', values: [ModulesEnum.r73kl]},
        ],
      },
      {
        groupName: 'Некеровані авіаційні ракети',
        groupControlName: GroupNameEnum.uncorrected_aviation_rockets,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.c8kom, ModulesEnum.c13, ModulesEnum.c24b]},
        ],
      },
      {
        groupName: 'Авіаційні набої',
        groupControlName: GroupNameEnum.aviation_ammunition,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.mm30]},
        ],
      },
    ],
  },
  {
    airplaneName: AirplanesEnum.mig29,
    airplaneControlName: 'mig29',
    outfitGroups: [
      {
        groupName: 'КАР класу \'повітря-повітря\'. од.',
        groupControlName: GroupNameEnum.air_air,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.r27r]},
          {control: 'control_1', values: [ModulesEnum.r73kl]},
        ],
      },
      {
        groupName: 'Некеровані авіаційні ракети',
        groupControlName: GroupNameEnum.uncorrected_aviation_rockets,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.c8kom, ModulesEnum.c13, ModulesEnum.c24b]},
        ],
      },
      {
        groupName: 'Авіаційні набої',
        groupControlName: GroupNameEnum.aviation_ammunition,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.mm30]},
        ],
      },
    ],
  },
  {
    airplaneName: AirplanesEnum.su25,
    airplaneControlName: 'su25',
    outfitGroups: [
      {
        groupName: 'КАР класу \'повітря-повітря\'. од.',
        groupControlName: GroupNameEnum.air_air,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.r60m]},
        ],
      },
      {
        groupName: 'КАР класу \'повітря-поверхня\'. од.',
        groupControlName: GroupNameEnum.air_ground,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.x25mp, ModulesEnum.x29l]},
        ],
      },
      {
        groupName: 'Некеровані авіаційні ракети',
        groupControlName: GroupNameEnum.uncorrected_aviation_rockets,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.c8kom, ModulesEnum.c13, ModulesEnum.c25ofmpu]},
        ],
      },
      {
        groupName: 'Авіаційні бомби, од.',
        groupControlName: GroupNameEnum.aviation_bombs,
        outfits: [
          {
            control: 'control_0', values: [
              ModulesEnum.fab500m54, ModulesEnum.fab500m62, ModulesEnum.fab250m54, ModulesEnum.fab250m62, ModulesEnum.ofab250270,
              ModulesEnum.rbk500shoab05, ModulesEnum.rbk500ptab1, ModulesEnum.rbk250shoab, ModulesEnum.zab500sh,
            ],
          },
        ],
      },
      {
        groupName: 'Авіаційні набої',
        groupControlName: GroupNameEnum.aviation_ammunition,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.mm30]},
        ],
      },
    ],
  },
  {
    airplaneName: AirplanesEnum.su24m,
    airplaneControlName: 'su24m',
    outfitGroups: [
      {
        groupName: 'КАР класу \'повітря-повітря\'. од.',
        groupControlName: GroupNameEnum.air_air,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.r60m]},
        ],
      },
      {
        groupName: 'КАР класу \'повітря-поверхня\'. од.',
        groupControlName: GroupNameEnum.air_ground,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.x25mp, ModulesEnum.x29l, ModulesEnum.x58u]},
        ],
      },
      {
        groupName: 'Кориговані  авіаційні  бомби,  од.',
        groupControlName: GroupNameEnum.adjusted_aviation_bombs,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.kab500l, ModulesEnum.kab1500lpr]},
        ],
      },
      {
        groupName: 'Авіаційні бомби, од.',
        groupControlName: GroupNameEnum.aviation_bombs,
        outfits: [
          {
            control: 'control_0',
            values: [ModulesEnum.fab500m54, ModulesEnum.fab500m62, ModulesEnum.fab500t,
              ModulesEnum.fab250m54, ModulesEnum.fab250m62, ModulesEnum.ofab250270, ModulesEnum.rbk500shoab05,
              ModulesEnum.rbk500ptab1, ModulesEnum.rbk250shoab, ModulesEnum.zab500sh],
          },
        ],
      },
      {
        groupName: 'Некеровані авіаційні ракети',
        groupControlName: GroupNameEnum.uncorrected_aviation_rockets,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.c8kom, ModulesEnum.c13, ModulesEnum.c24b, ModulesEnum.c25ofmpu]},
        ],
      },
      {
        groupName: 'Авіаційні набої',
        groupControlName: GroupNameEnum.aviation_ammunition,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.mm23]},
        ],
      },
    ],
  },
  {
    airplaneName: AirplanesEnum.mi24p,
    airplaneControlName: 'mi24p',
    outfitGroups: [
      {
        groupName: 'Некеровані авіаційні ракети',
        groupControlName: GroupNameEnum.uncorrected_aviation_rockets,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.c8kom, ModulesEnum.c13]},
        ],
      },
      {
        groupName: 'Авіаційні бомби, од.',
        groupControlName: GroupNameEnum.aviation_bombs,
        outfits: [
          {
            control: 'control_0', values: [ModulesEnum.fab250m54, ModulesEnum.fab250m62, ModulesEnum.ofab250270, ModulesEnum.ofab100120,
              ModulesEnum.rbk250shoab, ModulesEnum.rbk500shoab05],
          },
        ],
      },
      {
        groupName: 'Авіаційні набої',
        groupControlName: GroupNameEnum.aviation_ammunition,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.mm30]},
        ],
      },
    ],
  },
  {
    airplaneName: AirplanesEnum.mi8mt,
    airplaneControlName: 'mi8mt',
    outfitGroups: [
      {
        groupName: 'Некеровані авіаційні ракети',
        groupControlName: GroupNameEnum.uncorrected_aviation_rockets,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.c8kom]},
        ],
      },
      {
        groupName: 'Авіаційні бомби, од.',
        groupControlName: GroupNameEnum.aviation_bombs,
        outfits: [
          {
            control: 'control_0',
            values: [ModulesEnum.fab250m54, ModulesEnum.fab250m62, ModulesEnum.ofab100120, ModulesEnum.ofab250270, ModulesEnum.rbk250shoab],
          },
        ],
      },
    ],
  },
  {
    airplaneName: AirplanesEnum.ka27pch,
    airplaneControlName: 'ka27pch',
    outfitGroups: [
      {
        groupName: 'Авіаційні бомби, од.',
        groupControlName: GroupNameEnum.aviation_bombs,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.fab250m54, ModulesEnum.fab250m62]},
        ],
      },
    ],
  },
  {
    airplaneName: AirplanesEnum.ka29,
    airplaneControlName: 'ka-29',
    outfitGroups: [
      {
        groupName: 'Некеровані авіаційні ракети',
        groupControlName: GroupNameEnum.uncorrected_aviation_rockets,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.c8kom]},
        ],
      },
      {
        groupName: 'Авіаційні бомби, од.',
        groupControlName: GroupNameEnum.aviation_bombs,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.ofab100120]},
        ],
      },
      {
        groupName: 'Авіаційні набої',
        groupControlName: GroupNameEnum.aviation_ammunition,
        outfits: [
          {control: 'control_0', values: [ModulesEnum.mm30]},
        ],
      },
    ],
  },
];
