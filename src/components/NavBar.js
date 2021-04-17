import React, { useState } from "react";
import menuIcon from "../assets/menuIcon.png";
import LogoutBtn from "../components/LogoutBtn";

function NavBar(params) {
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
    params.setsearchOn(false);
    closeMenus();
  };

  const openUploadModal = () => {
    params.setUploadModalOn(true);
    closeMenus();
  };

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
              <li onClick={openUploadModal}><p>upload de membros</p></li>
              <li onClick={openUploadModal}><p>update forçado do DW para contrato</p></li>
              <li onClick={openUploadModal}><p>histórico de modificações</p></li>
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