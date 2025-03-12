import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import NavBar from './Navbar'
import { Home } from './Home'
import { About } from './About'
import { Posts } from './Posts'
import { Post } from './Post'
import { PageNotFound } from './PageNotFound'

export function AppWithRoutes(){

    const router = createBrowserRouter([{
        element: (
            <>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </>
        ),
        children:[
            {
                path: '/',
                element: <Home/>
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
    }])

    return <div className="wrapper">
        <RouterProvider router={router}/>
    </div>

}