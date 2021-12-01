import { createContext, ReactNode, useState } from "react";
import api from "../services/api";
import { ICredentialsDev } from "../interface/credentialsDev";

interface IUser {
  id: string;
  name: string;
  email: string;
  active: string;
  created_at: Date | string;
  updated_at: Date | string;
}

interface IAuthState {
  token: string;
  user: IUser;
}

interface IAuthContextStates {
  user: IUser;
  token: string;
  signInDev(data: ICredentialsDev): Promise<void>;
  signOut(): void;
}

interface IAuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextStates);

export function AuthContextProvider({ children }: IAuthContextProviderProps) {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("ProjectManagerToken");
    const user = localStorage.getItem("ProjectManagerUser");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  async function signInDev(data: ICredentialsDev) {
    const response = await api.post("/authentication", data);

    const { token, user } = response.data;

    localStorage.setItem("ProjectManagerToken", token);
    localStorage.setItem("ProjectManagerUser", JSON.stringify(user));

    setData({
      token,
      user,
    });
  }

  function signOut() {
    localStorage.removeItem("ProjectManagerToken");
    localStorage.removeItem("ProjectManagerUser");

    setData({} as IAuthState);
  }

  return (
    <AuthContext.Provider
      value={{ signInDev, user: data.user, token: data.token, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
