import "./styles.css"
import MainMenu from "@/components/mainMenu"
import { FcSupport, FcAutomotive, FcDataConfiguration, FcSurvey } from "react-icons/fc";


export default function Dashboard(){

    return (
        <div>
            <MainMenu />
            <div className="first1.1">
                <h1>Auto care</h1>
                <h2>dashboard</h2>
                <div className="second1.0">
                    <div className="second1.1">
                        <FcSupport />
                        <h2 className="second1.2">
                            Manutenção
                        </h2>
                    </div>
                    <div className="third1.1">
                        <FcAutomotive />
                        <h2 className="third1.2">
                            Produção
                        </h2>
                    </div>
                    <div className="four1.1">
                        <FcDataConfiguration />
                        <h2 className="four1.2">
                            Estoque
                        </h2>
                    </div>
                    <div className="five1.1">
                        <FcSurvey />
                        <h2>Qualidade</h2>
                    </div>



                </div>
            </div>
        </div>
    )
}