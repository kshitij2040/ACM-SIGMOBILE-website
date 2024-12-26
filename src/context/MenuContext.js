import React, { createContext, useContext } from "react";

const MenuContext = createContext({
  isMenuOpen: false,
  setMenuValue: () => {},
});

export const useMenuContext = () => useContext(MenuContext);

export default MenuContext;
