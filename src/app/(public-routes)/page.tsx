"use client";
import "./style.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  // const para set senha password e erros
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const disabledButton = !email || password.length === 0;
  // const para verificar senha 
  const handleLogin = () => {
    if (email === "adm" && password === "123") {
      // ajuste para a rota pós‑login
      router.push("/dashboard");
    } else {
      setError("Credenciais inválidas");
    }
  };

  return (
    <div className="container">
      <div className="form">
        <img
          src="https://png.pngtree.com/png-vector/20190919/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1742031.jpg"
          className="imagem"
          alt="imagem"
        />
        <h1>Página de login</h1>
        <input
          className="input"
          placeholder="E-mail"
          type="text"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          className="input"
          placeholder="Password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        {error && <span className="error">{error}</span>}
        <button className="button" onClick={handleLogin} disabled={disabledButton}>
          Entrar
        </button>
      </div>
    </div>
  );
}
