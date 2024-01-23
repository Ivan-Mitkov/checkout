import React, { useEffect } from "react";
import { doGetProductsRequest } from "../../state/products";
import {
  doGetCitiesRequest,
  doGetCountriesRequest,
} from "../../state/locations";
import useBackendCall from "../../hooks/useBackendCall";

const CartPage = () => {
  useBackendCall([
    doGetProductsRequest,
    doGetCitiesRequest,
    doGetCountriesRequest,
  ]);
  return <div>CartPage</div>;
};

export default CartPage;
