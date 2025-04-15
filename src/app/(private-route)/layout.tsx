import "./styles.css"
import MainMenu from "@/components/mainMenu";

export default function PrivateLayout({ children }: { children: React.ReactNode}){
    return (
        <div className="layout">
        <MainMenu/>
        <main className="main">
            {children}
        </main>
    </div>
    )
}''