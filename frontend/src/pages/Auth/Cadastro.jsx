// Importações
import "./Login.scss";
import React from "react";
import { Link } from "react-router-dom";

// imagens logo svg redes sociais
import facebookImage from "@assets/facebook-redes.svg";
// import instagramImage from './../../assets/instagram-redes.svg';
import linkedinImage from "@assets/linkedin-redes.svg";
import googleImage from "@assets/google-redes.svg";

// componentes
import Button from "@components/Button/Button"; // Importa o componente Button

function Cadastro() {
  return (
    <div>
      <section className="section-form">
        {/* <div className="photo-circle">
                </div> */}
        <div className="card">
          <h1>Clustertec</h1>

          <div>
            <h2>A organização começa aqui 🚀</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, felis vitae tempor.</p>
          </div>

          <form action="">
            <div className="label-card">
              <label>Nome de usuário</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="label-card">
              <label>Email</label>
              <input type="text" placeholder="Digite seu email" />
            </div>

            <div className="label-card">
              <label>Senha</label>
              <input type="text" placeholder=".............." />
            </div>
            <div className="label-card-check">
              <input type="check" />
              <label>
                Li e concordo com os <Link>termos de privacidade</Link>
              </label>
            </div>
            {/* <button>Cadastrar</button> */}
            <Button>Cadastrar</Button>
          </form>

          <Link to="/pages/Login/Login">
            <span>Já tem uma conta? Entre</span>
          </Link>

          <hr />

          <div className="register-logos">
            <img src={googleImage} alt="Descrição da Imagem" />
            <img src={facebookImage} alt="Descrição da Imagem" />
            {/* <img src={instagramImage} alt="Descrição da Imagem" /> */}
            <img src={linkedinImage} alt="Descrição da Imagem" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cadastro;
