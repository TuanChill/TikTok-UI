import { Coin, Keyboard, Language, Logout, Profile, Question, Setting } from '~/components/Icons';

export const MENU_ITEMS = [
    {
        title: 'English',
        icon: <Language />,
        children: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Tiếng Việt' },
            ],
        },
    },
    { title: 'Feedback and help', icon: <Question />, to: '/feedback' },
    { title: 'Keyboard shortcuts', icon: <Keyboard /> },
];

export const UserMenu = [
    { title: 'View profile', icon: <Profile />, to: '/profile' },
    {
        title: 'Get coins',
        icon: <Coin />,
        to: '/coin',
    },
    {
        title: 'Setting',
        icon: <Setting />,
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        title: 'Log out',
        icon: <Logout />,
        to: '/logout',
        separate: true,
    },
];
