import { createContext } from "react";

export const ReloadContext = createContext(false);
export const UserContext = createContext({
    user: "",
    handleLogin: (name) => {}
});
export const ThemeContext = createContext();
