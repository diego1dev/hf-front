/* eslint-disable max-len */
import { FE } from './constants';
import { IAction, IReducerState } from './interfaces';

export function reducer<T extends any>(state :IReducerState<T>, action:IAction<T>): IReducerState<T> {
  switch (action.type) {
    case FE.LOAD:
      return { ...state, isLoading: true };
    case FE.FETCHED:
      return {
        ...state,
        data: action.payload || state.data,
        isLoading: false,
        isError: false,
      };
    case FE.ERR:
      return {
        ...state,
        data: action.payload || state.data,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error('Case no definido');
  }
}
export default reducer;
