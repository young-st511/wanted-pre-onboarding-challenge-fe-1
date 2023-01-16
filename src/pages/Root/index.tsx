import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";
import LogIn from "../LogIn";

function Root() {
  const isAuth = useAuth();

  return (
   <>
    {isAuth ? <Outlet /> : <LogIn />}
   </>
  )
}

export default Root