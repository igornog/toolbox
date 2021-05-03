import React, { useState } from "react";
import menuIcon from "../assets/menuIcon.png";
import LogoutBtn from "../atoms/LogoutBtn";
import UpdateContractModal from "../components/modals/UpdateContractModal";

function NavBar(props) {
  console.log('navbar', props);
  const [MenuOpened, setMenuOpened] = useState(false);
  const [ProfileOpened, setProfileOpened] = useState(false);
  // const [UpdateOpenedModal, setUpdateOpenedModal] = useState(false);

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

  const openUpdateModal = () => {
    props.setModalOn(true);
    props.setUpdateContractModalOn(true);
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
              <li onClick={openUpdateModal}><p>Atualizar contrato e coberturas</p></li>
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
