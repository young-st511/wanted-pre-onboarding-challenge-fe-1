import { postSignIn, postSignOut } from "../../apis/auth/authAPI";
import { SignInRequest, SignInResponse } from "../../apis/auth/authAPI.type";
import { AxiosResponse } from "axios";
import { createContext, PropsWithChildren, useRef, useState } from "react";
import { checkTokenValidity, setAccessToken } from "../../utils/tokenUtils";

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

  const signIn = async (data: SignInRequest) => {
    const res = await postSignIn(data);

    if (res.status == 200) {
      setAccessToken(res.data.token);
      setUser(true);
    }

    return res;
  };

  const signInWithToken = (token: string) => {
    setAccessToken(token);
    setUser(true);
  };

  const signOut = () => {
    postSignOut();
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signInWithToken, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
