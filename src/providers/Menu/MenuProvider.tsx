import React, { Children, useEffect } from "react";
import { GetMenus } from "../../utils/api";
import MenuContext from "./MenuContext";

interface MenuProviderProps {
  children: JSX.Element;
}

interface MenuProviderContextValues {
  foo: string;
}

const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {

  

  const contextValues: MenuProviderContextValues = {
    foo: "bar",
  };

  return (
    <MenuContext.Provider value={contextValues}>
      {Children.only(children)}
    </MenuContext.Provider>
  );
};

export default MenuProvider