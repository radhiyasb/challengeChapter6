import { API_ENDPOINT } from "../../utils/api-endpoint";
import http3 from "../../utils/http3";

export const getDetail = async (id) => {
  return await http3.get(API_ENDPOINT.DETAIL_MOVIE(id));
}