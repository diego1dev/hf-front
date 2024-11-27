import { PlanStatus } from 'models/CardModel';

export type ColorsStatus = 'gray' | 'amber' | 'indigo' | 'red';

export const getColorBagde = (status:PlanStatus) :ColorsStatus => {
  switch (status) {
    case 'Expired':
      return 'gray';
    case 'Pending':
      return 'amber';
    case 'Active':
      return 'indigo';
    default:
      return 'red';
  }
};
