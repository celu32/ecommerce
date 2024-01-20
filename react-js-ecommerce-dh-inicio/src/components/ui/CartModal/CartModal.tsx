import styles from "./CartModal.module.css"
import Close from "../../../assets/close.svg"
import { FC } from "react"
import useCartContext from "../../../hooks/useCartContext"
import CartProdct from "../../../interface/cartProduct"

interface Props {
    handleShowCartModal : () => void
}


const CartModal : FC<Props> = ({handleShowCartModal}) => {

    const {state:{cartItems}, dispatch} = useCartContext()

    const removeFromCart = (item : CartProdct) : void =>{
        dispatch({type: "REMOVE_FROM_CART", payload: item})
    }

    const addToCart = (item : CartProdct) : void =>{
        dispatch({type: "ADD_TO_CART", payload: item})
    }

    const getTotal = () => {
        let sum = 0
        cartItems.forEach(cartProduct => {
            sum = sum + (cartProduct.price * cartProduct.quantity)
        });
        return sum
    }

  return (
    <div className={styles.modalContainer}>
        <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
            <img src={Close} alt="Close" />
        </button>
        <table className={styles.modalTable}>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Remove</th>
                    <th>Quantity</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map((cartProduct)=>(
                    <tr key={cartProduct.id}>
                        <td>{cartProduct.title}</td>
                        <td>{`$ ${cartProduct.price},00`}</td>
                        <td><button onClick={()=>removeFromCart(cartProduct) } >-1</button></td>
                        <td>{cartProduct.quantity}</td>
                        <td><button onClick={()=>addToCart(cartProduct) }>+1</button></td>
                    </tr>
                    )
                )}

            </tbody>
        </table>
        <div><h3>{`Total: $ ${getTotal()},00`}</h3></div>
        <div className={styles.modalButtonContainer}><button >Checkout</button></div>
    </div>
  )
}

export default CartModal

