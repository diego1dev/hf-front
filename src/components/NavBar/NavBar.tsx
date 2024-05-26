import { LanguageSelect } from 'components/LanguageSelect';
import { useAuth } from 'hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

export function Navbar() {
  const { t } = useTranslation(['navbar']);
  const { token } = useAuth();
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50 sticky bg-primary">
        <nav className=" flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src="https://tzgvp7n8bz3v-u4239.pressidiumcdn.com/wp-content/uploads/2022/08/holafly-logo.svg"
                alt="Holafly"
              />
            </a>
          </div>
          <div className="flex flex-1 justify-end space-x-8">
            <LanguageSelect />
            <a href={token ? '/logout' : '/login'} className="text-sm font-semibold leading-6 text-gray-900">
              {t(token ? 'logout' : 'login')}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>
      <div className="relative isolate px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}
export default Navbar;
