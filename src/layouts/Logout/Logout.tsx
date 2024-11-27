import useAuth from 'hooks/useAuth/useAuth';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function Logout() {
  const { t } = useTranslation(['logout']);
  const { t: tcommon } = useTranslation(['common']);

  const { logout } = useAuth();
  useEffect(() => {
    logout();
    return () => {

    };
  }, []);

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {t('message')}
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/login"
            className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            {tcommon('homeButton')}
          </a>
        </div>
      </div>
    </main>
  );
}
export default Logout;
