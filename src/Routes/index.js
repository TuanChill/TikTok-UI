import HeaderFooter from "~/Layouts/HeaderFooter"
import Following from "~/pages/Following"
import Home from "~/pages/Home"
import Profile from "~/pages/Profile"
import Search from "~/pages/Search"
import UpLoad from "~/pages/Upload"

// public Routes
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: UpLoad, layout: HeaderFooter},
    { path: '/profile', component: Profile},
    { path: '/search', component: Search},
]


// private routes
export const PrivateRoutes = [

]