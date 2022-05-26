import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';
import "./styles.css"
import "./navBar.css"

let carro = 4;
const NavBar = () => {

    return <>
        <div className="container-navbar">
            <Link to="/" style={{ textDecoration: 'none' }} >
                <div className="logo">
                    <img src="./logo192.png" style={{ width: "90px", height: "60px" }} alt="logo" />
                    <h3 style={{ display: "inline" }}>IB</h3>
                </div>
            </Link>

            <nav className="nav">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <p className="nabBtn">Home</p>
                </Link>
                <Link to="/category/Balls" style={{ textDecoration: 'none' }}>
                    <p className="nabBtn">Balls</p>
                </Link>
                <Link to="/category/Clubs" style={{ textDecoration: 'none' }}>
                    <p className="nabBtn">Clubs</p>
                </Link>
                <span style={{ paddingLeft: 100 }}>
                    <CartWidget />  {carro}
                </span>
            </nav>
        </div>
    </>;
}

export default NavBar;