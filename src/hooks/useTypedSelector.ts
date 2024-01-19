import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store";
//https://react-redux.js.org/using-react-redux/static-typing#typescript

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
