import apiClient from "./apiClient";
import { Product } from "../types";

interface ProductResponse {
  data: { products: Product[] };
}

export const getProductsRequest = (): Promise<ProductResponse> => {
  let url = "/products";

  return apiClient.get<ProductResponse, any>(url);
};
