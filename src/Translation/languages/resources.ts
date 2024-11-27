import commonEs from './es/common.json';
import commonEn from './en/common.json';
import navbarEs from './es/navbar.json';
import navbarEn from './en/navbar.json';
import homeEs from './es/home.json';
import homeEn from './en/home.json';
import notFoundEs from './es/notFound.json';
import notFoundEn from './en/notFound.json';
import loginEs from './es/login.json';
import loginEn from './en/login.json';
import logoutEs from './es/logout.json';
import logoutEn from './en/logout.json';

// ---Using different namespaces
export const resources = {
  es: {
    common: commonEs,
    home: homeEs,
    notFound: notFoundEs,
    navbar: navbarEs,
    login: loginEs,
    logout: logoutEs,
  },
  en: {
    common: commonEn,
    home: homeEn,
    notFound: notFoundEn,
    login: loginEn,
    navbar: navbarEn,
    logout: logoutEn,
  },
};

export default resources;
