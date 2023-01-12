import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useRef(useNavigate());
  useEffect(() => {
    navigate.current("/logIn");
  }, []);

  return (
    <>
      <Link to="/signUp">회원가입</Link>
    </>
  );
}

export default LogIn;
