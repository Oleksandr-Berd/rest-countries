import { createContext, Context } from "react";
import { IState } from "./ThemeContextProvider";

const ThemeContext: Context<IState> = createContext<IState>({
  theme: "light",
  toggle: (theme) => {},
});

export default ThemeContext;