import React, { useEffect } from "react";
import { doGetProductsRequest } from "../../state/products";
import {
  doGetCitiesRequest,
  doGetCountriesRequest,
} from "../../state/locations";
import useBackendCall from "../../hooks/useBackendCall";

const HomePage = () => {
  useBackendCall([
    doGetProductsRequest,
    doGetCitiesRequest,
    doGetCountriesRequest,
  ]);
  return <div>HomePage</div>;
};

export default HomePage;
