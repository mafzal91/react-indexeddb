import { createContext } from 'react'

interface MenuContextInterface {}

const MenuContext = createContext<MenuContextInterface | null>(null);

export default MenuContext