import axios, { AxiosError, AxiosResponse } from "axios";
import { Post, User } from "./types";

// TODO: env
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

axios.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    const { data, status } = error.response!;
    switch (status) {
      case 400:
        console.error(data);
        break;

      case 401:
        console.error("unauthorised");
        break;

      case 404:
        console.error("/not-found");
        break;

      case 500:
        console.error("/server-error");
        break;
    }
    return Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: object) =>
    axios.post<T>(url, body).then(responseBody),
};

const posts = {
  getPosts: () => request.get<Post[]>("/Post"),
  getPostById: (id: string) => request.get<Post>(`/Post/${id}`),
};

const users = {
  getUsers: () => request.get<User[]>("/users"),
  getUserById: (id: string) => request.get<User>(`/users/${id}`),
};

const api = {
  posts,
  users,
};

export default api;
