import "./styles.css"
import MainMenu from "@/components/mainMenu"
import { FcSupport, FcAutomotive, FcDataConfiguration, FcSurvey } from "react-icons/fc";


export default function Dashboard() {

    return (
        <div className="menu-container-dashboard">
            <h1>Auto care</h1>
            <h2>dashboard</h2>
            <div className="menu-dashboard">
                <div className="menu-item-dashboard">
                    <FcSupport />
                    <h2>Manutenção</h2>
                </div>
                <div className="menu-item-dashboard">
                    <FcAutomotive />
                    <h2>Produção</h2>
                </div>
                <div className="menu-item-dashboard">
                    <FcDataConfiguration />
                    <h2>Estoque</h2>
                </div>
                <div className="menu-item-dashboard">
                    <FcSurvey />
                    <h2>Qualidade</h2>
                </div>
            </div>
        </div>

    )
}