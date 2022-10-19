import { Home, Live, UserGroup } from '~/components/Icons';
import routesConfig from '~/configs/routes';

export const MenuList = [
    { title: 'For You', to: routesConfig.home, icon: <Home /> },
    { title: 'Following', to: routesConfig.following, icon: <UserGroup /> },
    { title: 'Live', to: routesConfig.live, icon: <Live /> },
];
