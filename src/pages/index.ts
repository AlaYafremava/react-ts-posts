import { lazy } from "react";

export const ErrorPage = lazy(() => import("./Error/Error.page"));
export const PostsPage = lazy(() => import("./Posts/Posts.page"));
export const PostPage = lazy(() => import("./Posts/Post.page"));
export const UsersPage = lazy(() => import("./Users/Users.page"));
