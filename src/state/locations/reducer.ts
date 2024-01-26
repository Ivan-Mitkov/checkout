import { Dispatch } from "redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getCountriesRequest, getCitiesRequest } from "../../api/geoService";

interface City {
  id: string;
  name: string;
  country?: Country;
}

interface Country {
  id: string;
  name: string;
}
interface LocationState {
  cities: City[];
  countries: Country[];
  selectedCountry?: Country | null;
}
const locationSlice = createSlice({
  name: "location",
  initialState: {
    cities: [],
    countries: [],
    selectedCountry: null,
  } as LocationState,
  reducers: {
    setCities(state, action: PayloadAction<City[]>) {
      state.cities = action.payload;
    },
    setSelectedCountry(state, action: PayloadAction<Country>) {
      state.selectedCountry = action.payload;
    },
    setCountries(state, action: PayloadAction<Country[]>) {
      const countriesLenght = state.countries.length;
      if (countriesLenght) {
        const citiesWithCountry = state.cities.map((city, index) => ({
          ...city,
          country: action.payload[index % countriesLenght],
        }));
        state.cities = citiesWithCountry;
      }
      state.countries = action.payload;
    },
  },
});

export const { setCities, setCountries, setSelectedCountry } =
  locationSlice.actions;

export const doGetCitiesRequest = () => async (dispatch: Dispatch) => {
  try {
    const response = await getCitiesRequest();

    if (!response?.data) return;

    const { cities } = response.data;
    dispatch(setCities(cities));

    return cities;
  } catch (error) {
    throw error;
  }
};
export const doGetCountriesRequest = () => async (dispatch: Dispatch) => {
  try {
    const response = await getCountriesRequest();

    if (!response?.data) return;

    const { countries } = response.data;

    dispatch(setCountries(countries));

    return countries;
  } catch (error) {
    throw error;
  }
};

export default locationSlice.reducer;
