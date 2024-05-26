export type PlanStatus = 'Expired' | 'Pending' | 'Active';

export interface IGetCards {
  user:string;
}

export interface IConsumption {
  totalConsumption:number
}

export interface IuserPlanConsumption {
  status: PlanStatus,
  dateStart: string,
  dateEnd: string,
  comsuption: IConsumption | null,
  flag:string,
  country: string
  plan: string
}

export type IResultGetCards = IuserPlanConsumption[];
