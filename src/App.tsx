import { useState, useEffect, Fragment } from "react";

import { isLoggedIn } from "./utils/toolkit/features/user/userSlice";
import Spinner from "./components/Spinner/Spinner";
import Main from "./Main";
import { useDispatch } from "react-redux";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    try {
      const response = await fetch(" http://localhost:8080/refresh_token", {
        method: "POST",
        credentials: "include",
      });

      const { accessToken } = await response.json();

      if (accessToken === "") {
        setLoading(false);
        dispatch(isLoggedIn(false));
        return;
      }

      dispatch(isLoggedIn(true));
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <Fragment>
      <Main />
    </Fragment>
  );
}
