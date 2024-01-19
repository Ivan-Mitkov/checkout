import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useBackendCall = (apiFunc: any) => {
  const dispatch = useDispatch();

  // state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const executeRequest = async () => {
    setLoading(true);
    try {
      await dispatch(apiFunc());
    } catch (err: any) {
      console.log(err);
      setError(err.message || "Unexpected Error!");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // if another request is running - do not execute another one
    if (loading) return;

    executeRequest();
  }, []);

  return {
    error,
    loading,
  };
};

export default useBackendCall;
