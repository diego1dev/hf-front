import { IuserPlanConsumption } from 'models/CardModel';

export type BadgeStatusFlagProps = Pick<IuserPlanConsumption, 'status' | 'flag'> & {
  grayscale?:boolean
};
