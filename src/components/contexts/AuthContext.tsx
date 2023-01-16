import { postSignIn, postSignOut } from "apis/auth/authAPI";
import { SignInRequest, SignInResponse } from "apis/auth/authAPI.type";
import { AxiosResponse } from "axios";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from "react";
import { checkTokenValidity } from "utils/tokenUtils";

interface AuthCtxType {
  user: boolean;
  signIn: (
    data: SignInRequest
  ) => Promise<AxiosResponse<SignInResponse, SignInRequest>>;
  signOut: () => void;
}

const AuthContext = createContext<AuthCtxType | null>(null);

const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("Auth Context Error");
  }

  return ctx;
};

function AuthProvider({ children }: PropsWithChildren) {
  const { current: initAuth } = useRef(checkTokenValidity());
  const [user, setUser] = useState(initAuth);

  const signIn = async (data: SignInRequest) => {
    const res = await postSignIn(data);

    if (res.status == 200) {
      setUser(true);
    }

    return res;
  };

  const signOut = () => {
    postSignOut();
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default { AuthProvider, useAuth };
