import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
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

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Root;
