import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";
import { setAxiosDefaultsConfig } from "../../utils/axiosUtils";
import LogIn from "../LogIn";

function Root() {
  const { user } = useAuth();
  useEffect(() => {
    setAxiosDefaultsConfig();
  }, []);

  if (!user) {
    return <LogIn />;
  }

  return <Outlet />;
}

export default Root;
