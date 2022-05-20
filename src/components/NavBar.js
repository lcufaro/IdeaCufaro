import Box from "./Box/Box"
import CartWidget from "./CartWidget";
import style from './styles.css'

let carro = 4;
function NavBar() {


    return <>
        <div className="container">
            <h3>Tienda IB</h3>
            <button className="nabBtn">Home</button>
            <button className="nabBtn">Balls</button>
            <button className="nabBtn">Clubs</button>
            <span style={{ paddingLeft: 100 }}>
                <CartWidget />  {carro}
            </span>

        </div>
    </>;
}

export default NavBar;