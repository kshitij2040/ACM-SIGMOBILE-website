"use client";

import React, { useState } from "react";
import MenuContext from "@context/MenuContext";

const MenuContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const setMenuValue = (val) => setIsMenuOpen(val);

  return (
    <MenuContext.Provider value={{ isMenuOpen, setMenuValue }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
