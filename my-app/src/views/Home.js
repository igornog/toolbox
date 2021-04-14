import React, { useState } from "react";
import "./home.scss";
import LogoutBtn from "../components/LogoutBtn";
import toolboxIcon from "../assets/toolbox.png";
import menuIcon from "../assets/menuIcon.png";

function Home() {
  const [MenuOpened, setMenuOpened] = useState(false);
  const [ProfileOpened, setProfileOpened] = useState(false);

  const closeMenus = () => {
    setMenuOpened(false);
    setProfileOpened(false);
  };

  return (
    <>
      <section className="home-section">
        <nav>
          <div>
            <div className="menu" onClick={() => setMenuOpened(true)}>
              <img src={menuIcon} alt="menu-icon"></img>
            </div>
            <div
              className={MenuOpened === true ? "menu-opened" : "menu-closed"}
            ></div>
          </div>

          <div>
            <div className="profile" onClick={() => setProfileOpened(true)}>
              PERFIL
            </div>
            <div
              className={
                ProfileOpened === true ? "profile-opened" : "profile-closed"
              }
            >
              <ul>
                <li>
                  <LogoutBtn />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="search-box" onClick={closeMenus}>
          <h2>
            Hiring Toolbox{" "}
            <span>
              <img src={toolboxIcon} alt="toolbox-icon"></img>
            </span>
          </h2>
          <div>
            <input></input>
            <select>
              <option>CNPJ</option>
              <option>CPF</option>
              <option>Carteirinha</option>
              <option>Email</option>
            </select>
          </div>
          <button>
            <p>PROCURAR</p>
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
