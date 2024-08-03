// Importações
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "@utils/AuthContext";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@utils/ZodSchemas/Auth/loginSchema.js";

// Estilos
import "./Login.css";
// import './Login.scss';
// import './../../Global.css';
import "./../../Global.css";

// imagens logo svg redes sociais
import facebookImage from "@assets/facebook-redes.svg";
// import instagramImage from './../../assets/instagram-redes.svg';
import linkedinImage from "@assets/linkedin-redes.svg";
import googleImage from "@assets/google-redes.svg";

// componentes
import Button from "@components/Button/Button"; // Importa o componente Button

function Login() {
  const navigate = useNavigate();
  const { user, login } = useAuth();

  // Se o usuário estiver logado, redirecione para a página inicial
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  // Formulário de login
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginSchema),
  });

  // Função de envio do formulário
  function onSubmit(data) {
    login(data);
  }

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

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="label-card">
              <label>Email</label>
              {errors.email && <p>{errors.email.message}</p>}
              <input type="text" placeholder="Digite seu email" {...register("email")} />
            </div>

            <div className="label-card">
              <label>Senha</label>
              {errors.password && <p>{errors.password.message}</p>}
              <input type="text" placeholder="............" {...register("password")} />
            </div>

            <div className="label-card-check">
              <input type="check" />
              <label>Manter logado</label>
            </div>

            <Button type="submit">Entrar</Button>
          </form>

          <Link to="/pages/clustertec/homePage">
            <span>Home page</span>
          </Link>
          <Link to="/pages/login/cadastro">
            <span>Cadastro</span>
          </Link>
          <Link to="/pages/login/password">
            <span>Esqueci a senha</span>
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

export default Login;
