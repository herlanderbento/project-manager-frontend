import { useHistory } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import { Headers, Logo, Menu } from "./styles";
import logo from "../../assets/logo.png";
import MenuHeaderItem from "../MenuHeaderItem";

import { allMenus } from "./data";
import { UserInfo } from "../UserInfo";

function Header() {
  const { push } = useHistory();
  const { signOut } = useAuth();

  return (
    <Headers>
      <Logo src={logo} alt="Logo" />
      <Menu>
        {allMenus?.map(({ key, icon, title, menu, active }) => (
          <MenuHeaderItem
            key={key}
            title={title}
            icon={icon}
            menu={menu}
            active={() => push(`${active}`)}
          />
        ))}
        <MenuHeaderItem title="SignOut" icon={FaSignOutAlt} active={signOut} />
        <UserInfo/>
      </Menu>
    </Headers>
  );
}

export default Header;
