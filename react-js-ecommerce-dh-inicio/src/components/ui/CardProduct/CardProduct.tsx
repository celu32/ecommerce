import { useContext, FC } from "react"
import styles from "./CardProduct.module.css"
import { CartContext } from "../../../context/CartContext"
import Product from "../../../interface/product"

interface Props{
  product:Product
}

const CardProduct: FC<Props> = ({product}) => {

  const {dispatch} = useContext(CartContext)

  interface CartProdct {
    id: number
    title: string,
    image: string,
    quantity: number
  }

  const item : CartProdct = {
    id: product.id,
    title: product.title,
    image: product.image,
    quantity:1
  }

  const addToCart= (item: CartProdct ) => {
    dispatch({type:"ADD_TO_CART", payload: item})
  }

  return (
    <div className={styles.cardContainer}> 
        <img src={product.image} alt={product.title} className={styles.cardImage} />
        <div className={styles.cardBody} >
            <h3 className={styles.cardTitle} >{product.title}</h3>
            <div className={styles.cardDetail}>
                <p className={styles.cardType}>{product.category}</p>
                <p className={styles.cardPrice}>${product.price} <small>00</small></p>
            </div>
        </div>
        <button className={styles.cardButton} onClick={()=>addToCart(item)} >Add to Cart</button>
    </div>
  )
}

export default CardProduct