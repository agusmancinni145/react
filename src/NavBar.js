import CardWidget from "./CardWidget"

const NavBar = () => {
    return (
        <div>
            <ul className="navbar">
                <li ><a className="elemento" href="https://www.google.com.ar/">Inicio</a></li>
                <li ><a className="elemento" href="https://www.google.com.ar/">Productos</a></li>
                <li ><a className="elemento" href="https://www.google.com.ar/">Contacto</a></li>
            </ul>
            <CardWidget />
        </div>
    )
}

export default NavBar