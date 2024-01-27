import { useCallback, useEffect, useState } from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

type ApiFunc = () => (dispatch: Dispatch) => Promise<any>;

type UseBackendCallResult = {
  error: string;
  loading: boolean;
};

const useBackendCall = (apiFuncArray: ApiFunc[]): UseBackendCallResult => {
  const dispatch = useDispatch<Dispatch<any>>();

  // state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const executeRequest = useCallback(async () => {
    setLoading(true);
    try {
      await Promise.all(apiFuncArray.map((apiFunc) => dispatch(apiFunc())));
    } catch (err: any) {
      console.log(err);
      setError(err.message || "Unexpected Error!");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // if another request is running - do not execute another one
    if (loading) return;

    executeRequest();
  }, [executeRequest]);

  return {
    error,
    loading,
  };
};

export default useBackendCall;
