import logo from '@/assets/logo.jpg'
import "./styles.css"
import Image from 'next/image'
import Personagem from '../ImagemPesonagem'

export default function Header() {


   return (
      <header className="header">
         <Image src={logo} width={250} height={100} alt="logo" />
         <div>
         <Personagem src='https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg' />
         <h1>Estoque</h1>
         <h1>Manutenção</h1>
         <h1>Produção</h1>
         <h1>Qualidade</h1>
         </div>
      </header>
   )
}