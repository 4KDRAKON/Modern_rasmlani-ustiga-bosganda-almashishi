import Uy from "../img/headeruy.svg"
import Headerlogo from "../img/headerlogo.svg"
import Headerbtn from "../img/headerbtnlogo.svg"
function Header(){
    return(
        <>
        <header className="Header">
            <div className="container">
                <div className="logos">
                   <a className="aa" href="#link">
                   <img src={Uy} alt="uy" width={31} height={31} />
                   </a>
                    <a className="aa"  href="#link">
                    <img src={Headerlogo} alt="logo" width={91} height={30} />
                    </a>
                </div>


                <ul className="Headernimadir">
                    <li className="Header__item">
                        <a className="header__link" href="#link">About</a>
                    </li>
                    <li className="Header__item">
                        <a className="header__link" href="#link">Blog</a>
                    </li>
                    <li className="Header__item">
                        <a className="header__link" href="#link">Agency</a>
                    </li>
                    <li className="Header__item">
                        <a className="header__link" href="#link">Featured</a>
                    </li>
                    <li className="Header__item">
                        <a className="header__link" href="#link">Price</a>
                    </li>
                </ul>
                <button className="header__btn">
                    <img src={Headerbtn} alt="btn"width={30} height={14.34} />
                </button>
            </div>
        </header>
       
       
        </>
    )
}
export {Header};