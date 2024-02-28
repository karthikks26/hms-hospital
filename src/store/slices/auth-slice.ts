import { UserType } from "@/types/user";
import { StateCreator } from "zustand";

export interface AuthSlice {
  userInfo: UserType | undefined;
  setUserInfo: (userInfo: UserType | undefined) => void;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  userInfo: undefined,
  setUserInfo: (userInfo) => set({ userInfo }),
});
