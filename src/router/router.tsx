import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ErrorPage, PostPage, PostsPage, UsersPage } from "../pages";
import App from "../App";

export enum EPages {
  Home = "/",
  Posts = "posts",
  Users = "users",
}

export const routes: RouteObject[] = [
  {
    path: EPages.Home,
    element: <PostsPage />,
  },
  {
    path: EPages.Posts,
    element: <PostsPage />,
  },
  {
    path: "posts/:id",
    element: <PostPage />,
  },
  {
    path: EPages.Users,
    element: <UsersPage />,
  },
];

export const router = createBrowserRouter([
  {
    path: EPages.Home,
    element: <App />,
    errorElement: <ErrorPage />,
    children: routes,
  },
]);
