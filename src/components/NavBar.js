import React, { useState } from "react";
import menuIcon from "../assets/menuIcon.png";
import LogoutBtn from "../atoms/LogoutBtn";
import PaymentsServices from "../services/payments"

function NavBar(props) {
  const [MenuOpened, setMenuOpened] = useState(false);
  const [ProfileOpened, setProfileOpened] = useState(false);

  const closeMenus = () => {
    setMenuOpened(false);
    setProfileOpened(false);
  };

  const openMenu = () => {
    setMenuOpened(true);
    setProfileOpened(false);
  };

  const openProfile = () => {
    setMenuOpened(false);
    setProfileOpened(true);
  };

  const closeSearch = () => {
    props.setsearchOn(false);
    closeMenus();
  };

  const activePlans = () => {
    props.setConfirmationModalOn(true)
    props.setModalOn(true)
  }

  return (
    <>
      <nav>
        <div>
          <div className="menu" onClick={openMenu}>
            <img src={menuIcon} alt="menu-icon"></img>
          </div>
          <div className={MenuOpened === true ? "menu-opened" : "menu-closed"}>
            <span onClick={closeMenus}>x</span>
            <ul>
              <li onClick={closeSearch}><p>home</p></li>  
              <li onClick={activePlans}><p>ativar planos</p></li>
              <li><p>update forçado do DW para contrato</p></li>
              <li><p>histórico de modificações</p></li>
            </ul>
          </div>
        </div>

        <div>
          <div className="profile" onClick={openProfile}>
            PERFIL
          </div>
          <div
            className={
              ProfileOpened === true ? "profile-opened" : "profile-closed"
            }
          >
            <span onClick={closeMenus}>x</span>
            <ul>
              <li>
                <LogoutBtn />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
