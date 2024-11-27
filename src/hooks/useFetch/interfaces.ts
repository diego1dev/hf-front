export type IReducerState<T> = { data:T | null, isError:boolean, isLoading:boolean };
export type IAction<T> = {
  type:string,
  payload?:T
};

export type IReducer<T> = (state:IReducerState<T>, action:IAction<T>)=>(IReducerState<T>);
