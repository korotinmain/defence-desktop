import {GroupNameEnum} from 'src/app/core/enums/group-name.enum';

export type AddedAirplaneType = {
  airplaneName: string;
  result: {
    [key: string]: CalculationResultType | number,
  };
};

export type CalculationResultType = {
  type: string;
  value: string;
  count: number;
};
