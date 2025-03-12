import { Outlet, RouteObject } from "react-router";
import { About } from "./About";
import { Home } from "./Home";
import NavBar from "./Navbar";
import { PageNotFound } from "./PageNotFound";
import { Post } from "./Post";
import { Posts } from "./Posts";

export const routesConfig: RouteObject[] = [{
    element: (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </>
    ),
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/posts',
            element: <Posts />
        },
        {
            path: '/post/:id',
            element: <Post />
        },
        {
            path: '*',
            element: <PageNotFound />
        }
    ]
}]