import apiClient from "./apiClient";

export type Product = {
  id: string;
  name: string;
  price: string;
};

type ProductResponse = {
  product: Product[];
};
export const getProductsRequest = async () => {
  let url = "/products";

  return apiClient.get(url).then((res) => {
    return res;
  });
};
