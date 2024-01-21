import CardProduct from "../../components/ui/CardProduct/CardProduct"
import Header from "../../components/ui/Header/Header"
import styles from "./Home.module.css"
import { useEffect, useState } from "react"
import { getProducts } from "../../service/products.service"
import Product from "../../interface/product"
import { Toaster} from 'sonner'

const Home = () => {

    const [products, setProducts] = useState<Product[]>([])

    const [error, setError] = useState(false)

    const [isLoading, setIsLoading] = useState (true)



    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data)
        }).catch(()=>{
            setError(true)
        }).finally(()=>{
            setIsLoading(false)
        })
    },
    []
    )

    return (
        <>
            <Header />
            {isLoading && <p>Loading...</p>}
            {error && <p>Something went wrong</p>}
            <div className={styles.container}> 
            {products.map((product) => (
                <CardProduct key={product.id} product={product} />
            )
            )}
            <Toaster richColors />
            </div>
        </>
    )

}

export default Home