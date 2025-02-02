import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface User {
  birthDate: string;
  cpf: string;
  email: string;
  idUser: string;
  name: string;
  phone: string;
}

type State = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null; // Novo campo para o refresh token
};

type Actions = {
  setUser: (user: User | null) => void;
  setAccessToken: (token: string | null) => void;
  setRefreshToken: (token: string | null) => void; // Ação para atualizar o refresh token
  clearUserData: () => void;
};

const useUser = create<State & Actions>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null, // Inicializa o refresh token como nulo

      setUser: (user: User | null) => set(() => ({ user })),
      setAccessToken: (token: string | null) => set(() => ({ accessToken: token })),
      setRefreshToken: (token: string | null) => set(() => ({ refreshToken: token })), // Atualiza o refresh token
      
      clearUserData: () => set(() => ({ user: null, accessToken: null, refreshToken: null })), // Apaga tudo
    }),
    {
      name: "user-asyncstorage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useUser;
