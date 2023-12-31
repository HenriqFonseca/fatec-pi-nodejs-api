import "../../assets/css/sidebar.css"
import LogoDashboard from "./LogoDashboard"

export function SideBar(props) {
    console.log(props.active)
    return (
        <div className="sidebar">
            <div className="sidebar-logo-container">
                <LogoDashboard width="100%" height="35px" />
            </div>
            <div className="sidebar-items">
                <a href="categorias" className={`${props.active == "Categorias" ? "active" : ""} sidebar-item` }>Categorias</a>
                <a href="produtos" className={`${props.active == "Produtos" ? "active" : ""} sidebar-item` }>Produtos</a>
                <a href="clientes" className={`${props.active == "Clientes" ? "active" : ""} sidebar-item` }>Clientes</a>
                <a href="pedidos" className={`${props.active == "Pedidos" ? "active" : ""} sidebar-item` }>Pedidos</a>
                <a href="relatorios" className={`${props.active == "Relatorios" ? "active" : ""} sidebar-item` }>Relatórios</a>
                <a href="perfil" className={`${props.active == "Perfil" ? "active" : ""} sidebar-item` }>Perfil</a>
            </div>
            <div className="sidebar-footer">
                <a href="/logout" className="sidebar-item">Sair</a>
            </div>
        </div>
    )
}