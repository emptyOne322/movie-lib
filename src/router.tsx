import { Outlet, createBrowserRouter } from "react-router-dom";
import Search from "./Search";
import MovieDetails from "./MovieDetails";

export default createBrowserRouter([
    {
        path: '/',
        element: <Outlet />,
        children: [
            {
                element: <Search />,
                index: true,
            },
            {
                element: <Search />,
                path: 'search-movies'
            },
            {
                path: 'movie-details/:id',
                element: <MovieDetails />
            }
        ]
    },

])