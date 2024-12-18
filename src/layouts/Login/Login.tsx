import { useAuth } from 'hooks/useAuth';
import { FormEventHandler, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { loginService } from 'services/login';

export function Login() {
  const navigate = useNavigate();
  const { login, token } = useAuth();
  const { t } = useTranslation(['login']);

  const hangleLogin = async (dataLogin:any) => {
    const accessToken = await loginService(dataLogin);
    if (accessToken) {
      login(accessToken);
      navigate('/');
    }
  };
  const handleSubmit:FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    hangleLogin({ email, password });
  };

  useEffect(() => {
    if (token)navigate('/');
    return () => {

    };
  }, []);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {t('signInMessage')}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              {t('email')}
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                {t('password')}
              </label>
              <div className="text-sm">
                <a href="/forgotPass" className="font-semibold text-red-600 hover:text-red-500">
                  {t('forgotPass')}
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              {t('signIn')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
