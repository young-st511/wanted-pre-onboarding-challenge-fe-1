import { useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import useAuth from "../../hooks/auth/useAuth";
import { setAxiosDefaultsConfig } from "../../utils/axiosUtils";
import LogIn from "../LogIn";

function Root() {
  const { user } = useAuth();
  const navigate = useRef(useNavigate());
  const { pathname } = useLocation();

  setAxiosDefaultsConfig();

  useEffect(() => {
    if (user && pathname === "/") {
      navigate.current("/todos");
    }
  }, [pathname, user]);

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
