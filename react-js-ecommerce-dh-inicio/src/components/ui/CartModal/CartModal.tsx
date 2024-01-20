import styles from "./CartModal.module.css"
import Close from "../../../assets/close.svg"
import { FC } from "react"
import { Table } from "../Table/Table"
import { useNavigate } from "react-router-dom"


interface Props {
    handleShowCartModal : () => void
}



const CartModal : FC<Props> = ({handleShowCartModal}) => {

    const navigate = useNavigate()

  return (
    <div className={styles.modalContainer}>
        <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
            <img src={Close} alt="Close" />
        </button>
        <Table />
        <div className={styles.modalButtonContainer}>
            <button onClick={()=>(navigate('/checkout'))} >Checkout</button>
        </div>
    </div>
  )
}

export default CartModal

