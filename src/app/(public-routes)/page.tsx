'use client'
import "./style.css";
export default function Home() {
  return (
    <div className="container">
      <div className="form">
        <img src="https://png.pngtree.com/png-vector/20190919/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1742031.jpg" className="imagem" alt="imagem" />
        <h1>Pagina de login</h1>
        <input type="username" />
        <input type="Password" />
        <button className="button">
          entrar
        </button>
      </div>

    </div>
  )
}
