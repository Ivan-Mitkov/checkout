import apiClient from "./apiClient";

export const getProductsRequest = () => {
  let url = "/products";

  return apiClient.get(url);
};
