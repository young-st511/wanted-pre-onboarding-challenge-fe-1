import { postSignIn } from "../features/auth/api/authAPI";
import { AxiosResponse } from "axios";
import {
  SignInRequest,
  SignInResponse,
} from "../features/auth/api/authAPI.type";
import { createContext, PropsWithChildren, useRef, useState } from "react";
import {
  checkTokenValidity,
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/tokenUtils";
import { removeAxiosToken, setAxiosToken } from "../utils/axiosUtils";

interface AuthCtxType {
  user: boolean;
  signIn: (
    data: SignInRequest
  ) => Promise<AxiosResponse<SignInResponse, SignInRequest>>;
  signInWithToken: (token: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthCtxType | null>(null);

function AuthProvider({ children }: PropsWithChildren) {
  const { current: initAuth } = useRef(checkTokenValidity());
  const [user, setUser] = useState(initAuth);

  if (user) {
    const token = getAccessToken();
    setAxiosToken(token);
  }

  const signIn = async (data: SignInRequest) => {
    const res = await postSignIn(data);

    if (res.status == 200) {
      signInWithToken(res.data.token);
    }

    return res;
  };

  const signInWithToken = (token: string) => {
    setAccessToken(token);
    setUser(true);
  };

  const signOut = () => {
    removeAccessToken();
    removeAxiosToken();
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signInWithToken, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
