import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("Auth Context Error. Check Context Provider");
  }

  return ctx;
}

export default useAuth;
