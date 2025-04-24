'use client'
import MontadorasBarras from "@/components/graficos/index.02";
import "./styles.css"
import { FcSupport, FcAutomotive, FcDataConfiguration, FcSurvey } from "react-icons/fc";
import MontadorasPizza from "@/components/graficos/index01";

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
            <div style={{ maxWidth: '600px', margin: '50px auto', marginTop: '32px' }}>
                <h1>Gráfico de produção de Carros</h1>
                <MontadorasBarras />
            </div>
            <div style={{ maxWidth: '600px', margin: '50px auto', marginTop: '32px' }}>
                <h1>Gráfico de Manutenção de Carros</h1>
                <MontadorasPizza />
            </div>

        </div>

    )
}