import logo from '@/assets/logo.jpg'
import "./styles.css"
import Image from 'next/image'
import Personagem from '../ImagemPesonagem'

export default function MainMenu() {


   return (
      <div className='header'>
         <Image src={logo} width={250} height={100} alt="logo" />

         <div>
            <div className='second'>
               <Personagem src='https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg' />

               <div>
                  <strong>fulano</strong>
                  <strong>fulano@gmail.com</strong>
               </div>
            </div>
            <div>
               <span>home</span>
               <span>manutenção</span>
               <span>estoque</span>
               <span>qualidade</span>
               <span>produção</span>
            </div>
         </div>

      </div>
   )
}