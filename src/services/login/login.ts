/* eslint-disable import/prefer-default-export */
import Swal from 'sweetalert2';
import { plansApi } from '../../api/plansApi';

export const loginService = async (loginData:any) => {
  try {
    const { data } = await plansApi.post('/login/local', loginData);
    return data.token;
  } catch (error:any) {
    Swal.fire('Error iniciando sesión', '', 'error');
    return null;
  }
};
