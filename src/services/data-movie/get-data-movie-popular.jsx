import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http3 from "../../utils/http3";

export const getPopular = async () => {
  return await http3.get(API_ENDPOINT.POPULAR);
}