import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = {
  theme: localStorage.getItem("myTheme") || "light"
};
const reducer = (state , action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.newValue };
  
    default:
      break;
  }
}

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const changeTheme = (themeColor) => {
    localStorage.setItem("myTheme" , themeColor)
    dispatch({type: "CHANGE_THEME" , newValue : themeColor})
  }

  return (
     <ThemeContexttt.Provider value={{ ...firstState ,changeTheme}}>
      {children}
     </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;