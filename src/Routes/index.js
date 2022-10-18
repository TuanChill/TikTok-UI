import routesConfig from '~/configs/routes';

import HeaderFooter from '~/layouts/HeaderFooter';

import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import UpLoad from '~/pages/Upload';

// public Routes
export const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.upload, component: UpLoad, layout: HeaderFooter },
    { path: '/@:nickname', component: Profile },
    { path: routesConfig.search, component: Search },
];

// private routes
export const PrivateRoutes = [];
