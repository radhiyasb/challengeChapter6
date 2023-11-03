export const API_ENDPOINT = {
  POPULAR: "/api/v1/movie/popular",
  DETAIL_MOVIE: (id) => `/api/v1/movie/${id}`,
  Search1: `/api/v1/search/movie`,
  Search: (page, query) => `/api/v1/search/movie?page=${page}&query=${query}`,
  Register_User: "/api/v1/auth/register",
  LOGIN_USER: "/api/v1/auth/login",
  GET_USER: "/api/v1/auth/me",
};
