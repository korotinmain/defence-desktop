import {AirplaneType} from '../../../../core/types/airplane.type';
import {
  ADJUSTED_AVIATION_BOMBS_VALUES,
  AIR_AIR_FIRST_VALUES,
  AIR_AIR_SECOND_VALUES,
  AIR_AIR_THIRD_VALUES,
  AIR_GROUND_VALUES, AVIATION_AMMUNITION_VALUES, AVIATION_BOMBS_VALUES, UNCORRECTED_AVIATION_ROCKETS_VALUES,
} from '../../../../core/constants/outfit-values.constant';
import {GroupNameEnum} from '../../../../core/enums/group-name.enum';

export const AIRPLANES_DATA: Array<AirplaneType> = [
  {
    airplaneName: 'Су-27',
    airplaneControlName: 'su27',
    outfitGroups: [
      {
        groupName: 'КАР класу \'повітря-повітря\'. од.',
        groupControlName: GroupNameEnum.air_air,
        outfits: [
          {control: 'control_0', values: AIR_AIR_FIRST_VALUES},
          {control: 'control_1', values: AIR_AIR_SECOND_VALUES},
          {control: 'control_2', values: AIR_AIR_THIRD_VALUES},
        ],
      },
      {
        groupName: 'Некеровані авіаційні ракети',
        groupControlName: GroupNameEnum.uncorrected_aviation_rockets,
        outfits: [
          {control: 'control_0', values: UNCORRECTED_AVIATION_ROCKETS_VALUES},
        ],
      },
      {
        groupName: 'Авіаційні бомби, од.',
        groupControlName: GroupNameEnum.aviation_bombs,
        outfits: [
          {control: 'control_0', values: AVIATION_BOMBS_VALUES},
        ],
      },
      {
        groupName: 'Авіаційні набої',
        groupControlName: GroupNameEnum.aviation_ammunition,
        outfits: [
          {control: 'control_0', values: AVIATION_AMMUNITION_VALUES},
        ],
      },
    ],
  },
  {
    airplaneName: 'МиГ-29',
    airplaneControlName: 'mig29',
    outfitGroups: [
      {
        groupName: 'КАР класу \'повітря-повітря\'. од.',
        groupControlName: GroupNameEnum.air_air,
        outfits: [
          {control: 'control_0', values: AIR_AIR_FIRST_VALUES},
          {control: 'control_1', values: AIR_AIR_SECOND_VALUES},
          {control: 'control_2', values: AIR_AIR_THIRD_VALUES},
        ],
      },
      {
        groupName: 'Некеровані авіаційні ракети',
        groupControlName: GroupNameEnum.uncorrected_aviation_rockets,
        outfits: [
          {control: 'control_0', values: UNCORRECTED_AVIATION_ROCKETS_VALUES},
        ],
      },
      {
        groupName: 'Авіаційні бомби, од.',
        groupControlName: GroupNameEnum.aviation_bombs,
        outfits: [
          {control: 'control_0', values: AVIATION_BOMBS_VALUES},
        ],
      },
      {
        groupName: 'Авіаційні набої',
        groupControlName: GroupNameEnum.aviation_ammunition,
        outfits: [
          {control: 'control_0', values: AVIATION_AMMUNITION_VALUES},
        ],
      },
    ],
  },
  {
    airplaneName: 'Су-25',
    airplaneControlName: 'su25',
    outfitGroups: [
      {
        groupName: 'КАР класу \'повітря-повітря\'. од.',
        groupControlName: GroupNameEnum.air_air,
        outfits: [
          {control: 'control_0', values: AIR_AIR_FIRST_VALUES},
          {control: 'control_1', values: AIR_AIR_SECOND_VALUES},
          {control: 'control_2', values: AIR_AIR_THIRD_VALUES},
        ],
      },
      {
        groupName: 'КАР класу \'повітря-поверхня\'. од.',
        groupControlName: GroupNameEnum.air_ground,
        outfits: [
          {control: 'control_0', values: AIR_GROUND_VALUES},
        ],
      },
      {
        groupName: 'Некеровані авіаційні ракети',
        groupControlName: GroupNameEnum.uncorrected_aviation_rockets,
        outfits: [
          {control: 'control_0', values: UNCORRECTED_AVIATION_ROCKETS_VALUES},
        ],
      },
      {
        groupName: 'Авіаційні бомби, од.',
        groupControlName: GroupNameEnum.aviation_bombs,
        outfits: [
          {control: 'control_0', values: AVIATION_BOMBS_VALUES},
        ],
      },
      {
        groupName: 'Авіаційні набої',
        groupControlName: GroupNameEnum.aviation_ammunition,
        outfits: [
          {control: 'control_0', values: AVIATION_AMMUNITION_VALUES},
        ],
      },
    ],
  },
  {
    airplaneName: 'Су-24М',
    airplaneControlName: 'su24m',
    outfitGroups: [
      {
        groupName: 'КАР класу \'повітря-повітря\'. од.',
        groupControlName: GroupNameEnum.air_air,
        outfits: [
          {control: 'control_0', values: AIR_AIR_FIRST_VALUES},
          {control: 'control_1', values: AIR_AIR_SECOND_VALUES},
          {control: 'control_2', values: AIR_AIR_THIRD_VALUES},
        ],
      },
      {
        groupName: 'КАР класу \'повітря-поверхня\'. од.',
        groupControlName: GroupNameEnum.air_ground,
        outfits: [
          {control: 'control_0', values: AIR_GROUND_VALUES},
        ],
      },
      {
        groupName: 'Кориговані  авіаційні  бомби,  од.',
        groupControlName: GroupNameEnum.adjusted_aviation_bombs,
        outfits: [
          {control: 'control_0', values: ADJUSTED_AVIATION_BOMBS_VALUES},
        ],
      },
      {
        groupName: 'Авіаційні бомби, од.',
        groupControlName: GroupNameEnum.aviation_bombs,
        outfits: [
          {control: 'control_0', values: AVIATION_BOMBS_VALUES},
        ],
      },
      {
        groupName: 'Некеровані авіаційні ракети',
        groupControlName: GroupNameEnum.uncorrected_aviation_rockets,
        outfits: [
          {control: 'control_0', values: UNCORRECTED_AVIATION_ROCKETS_VALUES},
        ],
      },
      {
        groupName: 'Авіаційні набої',
        groupControlName: GroupNameEnum.aviation_ammunition,
        outfits: [
          {control: 'control_0', values: AVIATION_AMMUNITION_VALUES},
        ],
      },
    ],
  },
  {
    airplaneName: 'Мi-24П',
    airplaneControlName: 'mi24p',
    outfitGroups: [
      {
        groupName: 'Некеровані авіаційні ракети',
        groupControlName: GroupNameEnum.uncorrected_aviation_rockets,
        outfits: [
          {control: 'control_0', values: UNCORRECTED_AVIATION_ROCKETS_VALUES},
        ],
      },
      {
        groupName: 'Авіаційні бомби, од.',
        groupControlName: GroupNameEnum.aviation_bombs,
        outfits: [
          {control: 'control_0', values: AVIATION_BOMBS_VALUES},
        ],
      },
      {
        groupName: 'Авіаційні набої',
        groupControlName: GroupNameEnum.aviation_ammunition,
        outfits: [
          {control: 'control_0', values: AVIATION_AMMUNITION_VALUES},
        ],
      },
    ],
  },
  {
    airplaneName: 'Мi-8МТ',
    airplaneControlName: 'mi8mt',
    outfitGroups: [
      {
        groupName: 'Некеровані авіаційні ракети',
        groupControlName: GroupNameEnum.uncorrected_aviation_rockets,
        outfits: [
          {control: 'control_0', values: UNCORRECTED_AVIATION_ROCKETS_VALUES},
        ],
      },
      {
        groupName: 'Авіаційні бомби, од.',
        groupControlName: GroupNameEnum.aviation_bombs,
        outfits: [
          {control: 'control_0', values: AVIATION_BOMBS_VALUES},
        ],
      },
    ],
  },
  {
    airplaneName: 'Ка-27пч',
    airplaneControlName: 'ka27pch',
    outfitGroups: [
      {
        groupName: 'Авіаційні бомби, од.',
        groupControlName: GroupNameEnum.aviation_bombs,
        outfits: [
          {control: 'control_0', values: AVIATION_BOMBS_VALUES},
        ],
      },
    ],
  },
  {
    airplaneName: 'Ка-29',
    airplaneControlName: 'ka-29',
    outfitGroups: [
      {
        groupName: 'Некеровані авіаційні ракети',
        groupControlName: GroupNameEnum.uncorrected_aviation_rockets,
        outfits: [
          {control: 'control_0', values: UNCORRECTED_AVIATION_ROCKETS_VALUES},
        ],
      },
      {
        groupName: 'Авіаційні бомби, од.',
        groupControlName: GroupNameEnum.aviation_bombs,
        outfits: [
          {control: 'control_0', values: AVIATION_BOMBS_VALUES},
        ],
      },
      {
        groupName: 'Авіаційні набої',
        groupControlName: GroupNameEnum.aviation_ammunition,
        outfits: [
          {control: 'control_0', values: AVIATION_AMMUNITION_VALUES},
        ],
      },
    ],
  },
];
