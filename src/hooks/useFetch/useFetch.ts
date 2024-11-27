/* eslint-disable max-len */
import { useEffect, useReducer } from 'react';
import { reducer } from './reducer';
import { FE } from './constants';
import { IReducerState } from './interfaces';

function useFetch<T>(fetchFunction: any, deps: any) {
  const initialState:IReducerState<T> = { data: null, isError: false, isLoading: true };

  const [state, dispatch] = useReducer(reducer<T>, initialState);

  const functionFetch = async () => {
    try {
      dispatch({ type: FE.LOAD });
      const result = await fetchFunction();
      dispatch({ type: FE.FETCHED, payload: result });
    } catch (error) {
      dispatch({ type: FE.ERR });
    }
  };

  useEffect(() => {
    functionFetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return state;
}
export default useFetch;
