"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./styles.css";
import Personagem from "../ImagemPesonagem";
import {
  FcSupport,
  FcAutomotive,
  FcDataConfiguration,
  FcSurvey,
} from "react-icons/fc";
import { MdHome, MdLogout } from "react-icons/md";

export default function MainMenu() {
  const router = useRouter();

  const chamadas = [
    { label: "Home", page: "/dashboard", icon: <MdHome /> },
    { label: "Manutenção", page: "/maintenance", icon: <FcSupport /> },
    { label: "Produção", page: "/production", icon: <FcAutomotive /> },
    { label: "Estoque", page: "/stock", icon: <FcDataConfiguration /> },
    { label: "Qualidade", page: "/quality", icon: <FcSurvey /> },
  ];

  const handleLogout = () => {
    // se tiver auth context/ cookies, limpe aqui
    router.push("/"); // rota da tela de login
  };


  return (
    <div className="container">
      <div>
        {/* Perfil */}
        <div className="profile">
          <Personagem src="https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg" />
          <div className="profileInfos">
            <strong>fulano</strong>
            <strong>fulano@gmail.com</strong>
          </div>
        </div>

        {/* Menu lateral */}
        <div className="content">
          {chamadas.map((item) => (
            <Link key={item.label} className="item" href={item.page}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}

          {/* BOTÃO DE SAIR */}
          <button className="item logout" onClick={handleLogout}>
            <MdLogout />
            <span>Sair</span>
          </button>
        </div>

        {/* logo */}
        <img
          src="https://img.freepik.com/vetores-gratis/logotipo-do-servico-de-carro-gradiente_23-2149725123.jpg?semt=ais_hybrid&w=740"
          alt="logo"
        />
      </div>
    </div>
  );
}
