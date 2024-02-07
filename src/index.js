import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Root from "./pages/Root";
import CommunityPage from "./pages/CommunityPage";
import LandingPage from "./pages/LandingPage";
import TrendingPage from "./pages/TrendingPage";
import EventsPage from "./pages/EventsPage";
import NewsPage from "./pages/NewsPage";
import Movies from "./pages/community/MoviesPage";
import Series from "./pages/community/SeriesPage";
import Books from "./pages/community/BooksPage";
import Games from "./pages/community/GamesPage";
import Music from "./pages/community/MusicPage";
import Technology from "./pages/community/TechnologyPage";
import FunnyImages from "./pages/community/FunnyImagesPage";
import FunnyClips from "./pages/community/FunnyClipsPage";
import LoginPage, { action as loginAction } from "./pages/user/LoginPage";
import RegisterPage, {
  action as registerAction
} from "./pages/user/RegisterPage";
import UserPage from "./pages/user/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/trending",
        element: <TrendingPage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/events",
        element: <EventsPage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/news",
        element: <NewsPage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/community",
        element: <CommunityPage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/community/movies",
        element: <Movies />,
        errorElement: <ErrorPage />
      },
      {
        path: "/community/series",
        element: <Series />,
        errorElement: <ErrorPage />
      },
      {
        path: "/community/books",
        element: <Books />,
        errorElement: <ErrorPage />
      },
      {
        path: "/community/games",
        element: <Games />,
        errorElement: <ErrorPage />
      },
      {
        path: "/community/music",
        element: <Music />,
        errorElement: <ErrorPage />
      },
      {
        path: "/community/technology",
        element: <Technology />,
        errorElement: <ErrorPage />
      },
      {
        path: "/community/funnyimages",
        element: <FunnyImages />,
        errorElement: <ErrorPage />
      },
      {
        path: "/community/funnyclips",
        element: <FunnyClips />,
        errorElement: <ErrorPage />
      },
      {
        path: "/login",
        element: <LoginPage />,
        errorElement: <ErrorPage />,
        action: loginAction
      },
      {
        path: "/register",
        element: <RegisterPage />,
        errorElement: <ErrorPage />,
        action: registerAction
      },
      {
        path: "/user/:userid", //I don't know how to get userid
        element: <UserPage />,
        errorElement: <ErrorPage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
