import styles from "./CartModal.module.css"
import Close from "../../../assets/close.svg"

const CartModal = ({handleShowCartModal}) => {
  return (
    <div className={styles.modalContainer}>
        <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
            <img src={Close} alt="Close" />
        </button>
        <table className={styles.modalTable}>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Delete</th>
                    <th>Quantity</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>name</td>
                    <td><button >-1</button></td>
                    <td>2</td>
                    <td><button>+1</button></td>
                </tr>
            </tbody>
        </table>
        <div><h3>Total: 400,00</h3></div>
        <div className={styles.modalButtonContainer}><button >Checkout</button></div>
    </div>
  )
}

export default CartModal

