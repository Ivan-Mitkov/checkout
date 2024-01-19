import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { doGetProductsRequest } from "../../state/products";
import useBackendCall from "../../hooks/useBackendCall";
import { getProductsRequest } from "../../api/productsService";

const HomePage = () => {
  useBackendCall(doGetProductsRequest);
  return <div>HomePage</div>;
};

export default HomePage;
