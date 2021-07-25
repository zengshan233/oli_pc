
import { AboutUs } from "../pages/AboutUs/AboutUs";
import Index from "../pages/Index";
import Main from "../pages/Main/Main";
import News from "../pages/News/News";





export const routesConfig = [
    {
        path: "/",
        component: Index,
        routes: [
            {
                path: "/index",
                component: Main
            },
            {
                path: "/news",
                component: News
            },
            {
                path: "/aboutUs",
                component: AboutUs
            },
        ]
    },

];



