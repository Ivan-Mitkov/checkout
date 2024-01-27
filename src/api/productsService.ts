import apiClient from "./apiClient";
import { Product } from "../types";

type ProductResponse = {
  product: Product[];
};

export const getProductsRequest = async () => {
  let url = "/products";

  return apiClient.get(url).then((res) => {
    return res;
  });
};
