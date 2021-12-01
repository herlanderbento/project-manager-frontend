import { FaHome, FaUsers, FaCubes } from "react-icons/fa";

export const allMenus =  [
  {
    key: 1,
    icon: FaHome,
    title: 'Dashboard',
    menu: 'Dashboard',
    active: '/dashboard'
  },
  {
    key: 2,
    icon: FaUsers,
    title: 'Clientes',
    menu: 'Clientes',
    active: '/clients'
  },
  {
    key: 3,
    icon: FaCubes,
    title: 'Projectos',
    menu: 'Projectos',
    active: '/projects'
  }
]