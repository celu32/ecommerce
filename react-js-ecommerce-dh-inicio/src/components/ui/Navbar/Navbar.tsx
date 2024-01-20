import Logo from "../../../assets/logo.jpg"
import Cart from "../../../assets/cart.svg"
import Styles from "./Navbar.module.css"
import { useState } from "react"
import CartModal from "../CartModal/CartModal"
import useCartContext from "../../../hooks/useCartContext"
import { useNavigate, useLocation } from "react-router-dom"

const Navbar = () => {

  const [showCartModal, setShowCartModal]=useState(false)

  const {state:{cartItems}} = useCartContext()

  const navigate = useNavigate()

  const location = useLocation()

  const handleShowCartModal= () => {
    setShowCartModal(!showCartModal)
  }

  const getTotal = () =>{
    return cartItems.length
  }

  return (
    <div className={Styles.navbarContainer}>
        <div className={Styles.navbarDetail} onClick={()=>navigate('/')}>
            <img src={Logo} alt="logo" />
            <h2>DH Smartphones</h2>
        </div> 
        {
          location.pathname != "/checkout" && (
            <>
              <div className={Styles.navbarCartContainer}>
                <p className={Styles.navbarTextAmount}>{getTotal()}</p>
                <img src={Cart} alt="cart" onClick={handleShowCartModal}/>
              </div>
              {
                showCartModal && (<CartModal handleShowCartModal={handleShowCartModal} />)
              }
            </>
          )
        }
        
    </div>
  )
}

export default Navbar