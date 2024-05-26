/* eslint-disable import/prefer-default-export */
import Swal from 'sweetalert2';

import decodeJWT from 'utils/decodeJWT';
import { plansApi } from '../../api/plansApi';

export const getUserPlansService = async (token:string) => {
  try {
    const decodedToken = decodeJWT(token || '');
    const { data } = await plansApi.get(`/users/${decodedToken.id}/plans`);
    return data.data;
  } catch (error:any) {
    const { message } = error;
    Swal.fire('Error obteniendo planes del usuario', message, 'error');
    throw error;
  }
};
