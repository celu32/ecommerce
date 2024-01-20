import {  FC } from "react"
import styles from "./CardProduct.module.css"
import Product from "../../../interface/product"
import CartProduct from "../../../interface/cartProduct"
import useCartContext from "../../../hooks/useCartContext"
import { Toaster, toast } from 'sonner'

interface Props{
  product: Product
}

const CardProduct: FC<Props> = ({product}) => {

  const {dispatch} = useCartContext()


  const item: CartProduct = {
    id: product.id,
    title: product.title,
    image: product.image,
    price:product.price,
    quantity:1
  }

  const addToCart= (item: CartProduct ) => {
    dispatch({type:"ADD_TO_CART", payload: item})
    toast.success('Product added to cart')
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
        <Toaster richColors />
        <button className={styles.cardButton} onClick={()=>addToCart(item)} >Add to Cart</button>
    </div>
  )
}

export default CardProduct