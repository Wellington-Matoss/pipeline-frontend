// pages/Home.js
import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/utils/AuthContext";

//componentes
import Button from "@components/Button/Button"; // Importa o componente Button

const HomeClustertec = () => {
  const { userInfo } = useAuth();

  const userName = userInfo.name;

  let userRole;
  if (userInfo.role === "Admin") {
    userRole = "Adm";
  } else if (userInfo.role === "SystemAnalysts") {
    userRole = "Analista de Sistema";
  } else {
    userRole = "Analista de Dados";
  }

  return (
    <section>
      {/* // header + navbar  */}
      <header>
        <h2>CLUSTERTEC</h2>
        <nav>
          <ul>
            <li>Início</li>
            <li>Dashboard</li>
            <li>Notificações</li>
          </ul>
        </nav>
        <div>
          <b>{userName}</b> <br />
          <small>{userRole}</small>
        </div>
      </header>
      <main>
        <div className="main-title">
          {/* titulo  */}
          <div className="photo-circle"></div>
          <h2>Enormuscorp</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Mauris euismod, felis vitae tempor.
          </p>
        </div>

        {/* usuarios cluster  */}
        <div className="usuarios-cluster">
          <div className="usuarios-item user-1 adm">
            <img src="" alt="" />
          </div>
          <div className="usuarios-item user-2">
            <img src="" alt="" />
          </div>
          <div className="usuarios-item user-3">
            <img src="" alt="" />
          </div>
          <div className="usuarios-item user-4">
            <img src="" alt="" />
          </div>
          <button className="btn-border">Gerenciar</button>
          <Link to="/pages/login/login">Login</Link>
        </div>

        {/* cards principais  */}
        <div className="cards">
          <Link href="">
            <div className="card-item">
              <div className="icon-card">
                <i className="fi fi-rr-smartphone"></i>
              </div>
              <p>Dispositivos</p>
              <small>IOT</small>
              <h2>1697</h2>
              <small>Cad: 1703</small>
            </div>
          </Link>

          <Link to="">
            <div className="card-item">
              <div className="icon-card">
                <i className="fi fi-rr-building"></i>
              </div>
              <p>Entidades</p>
              <small>Globais</small>
              <h2>68</h2>
              <small>Cad: 1703</small>
            </div>
          </Link>

          <div className="card-item">
            <div className="icon-card">
              <i className="fi fi-rr-map-marker"></i>
            </div>
            <p>Locais</p>
            <small>Globais</small>
            <h2>5</h2>
            <small>Cad: 1703</small>
          </div>
        </div>

        {/* icones  */}
        {/* <i className='fi fi-rr-bulb'></i>
        <i className='fi fi-br-bulb'></i>
        <i className='fi fi-sr-bulb'></i> */}

        <Button>Teste botão</Button>
      </main>
    </section>
  );
};

export default HomeClustertec;
