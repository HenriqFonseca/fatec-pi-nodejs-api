import "../assets/css/sidebar.css"
import LogoDashboard from "./LogoDashboard"

export function SideBar(props) {
    console.log(props.active)
    return (
        <div className="sidebar">
            <div className="sidebar-logo-container">
                <LogoDashboard width="100%" height="35px" />
            </div>
            <div className="sidebar-items">
                <a href="#" className={`${props.active == "Categorias" ? "active" : ""} sidebar-item` }>Categorias</a>
                <a href="#" className={`${props.active == "Produtos" ? "active" : ""} sidebar-item` }>Produtos</a>
                <a href="#" className={`${props.active == "Clientes" ? "active" : ""} sidebar-item` }>Clientes</a>
                <a href="#" className={`${props.active == "Configurações" ? "active" : ""} sidebar-item` }>Configurações</a>
            </div>
            <div className="sidebar-footer">
                <a href="logout" className="sidebar-item">Sair</a>
            </div>
        </div>
    )
}