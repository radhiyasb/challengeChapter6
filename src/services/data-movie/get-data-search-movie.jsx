import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http3 from "../../utils/http3";

const fetchSearchDataMovie = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http3.get(_key, { params: _params });
  return data;
};

const useSearchMovieDataQuery = (options) => {
  return useQuery([API_ENDPOINT.Search, options], fetchSearchDataMovie);
};

export { fetchSearchDataMovie, useSearchMovieDataQuery };

export const getSearch = async (page,query) => {
  return await http3.get(API_ENDPOINT.Search (page,query));
}