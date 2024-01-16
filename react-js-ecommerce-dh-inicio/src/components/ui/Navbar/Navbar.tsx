import Logo from "../../../assets/logo.svg"
import Cart from "../../../assets/cart.svg"
import Styles from "./Navbar.module.css"

const Navbar = () => {

  return (
    <div className={Styles.navbarContainer}>
        <div className={Styles.navbarDetail}>
            <img src={Logo} alt="logo"/>
            <h2>titulo</h2>
        </div> 

        <div className={Styles.navbarCartContainer}>
            <p className={Styles.navbarTextAmount}>2</p>
            <img src={Cart} alt="cart"/>
        </div>
    </div>
  )
}

export default Navbar