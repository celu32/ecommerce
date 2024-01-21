import CardProduct from "../../components/ui/CardProduct/CardProduct"
import Header from "../../components/ui/Header/Header"
import styles from "./Home.module.css"
import { getProducts } from "../../service/products.service"
import { Toaster} from 'sonner'
import { useQuery } from "react-query"
import { useState } from "react"

const Home = () => {

    
    const [page, setPage] = useState(1)

    const cant = 15

    const {data, isLoading, error} = useQuery(
        ['products', page],
         ()=> getProducts(page, cant), 
         {keepPreviousData:true})


    return (
        <>
            <Header />
            <Toaster richColors />
            {isLoading && <p>Loading...</p>}
            {error && <p>Something went wrong</p>}
            <div className={styles.container}> 
                {data?.data.map((product) => (
                    <CardProduct key={product.id} product={product} />
                )
                )}
            </div>
            <div className={styles.paginationContainer}>
                <button 
                    className={styles.paginationButton} 
                    disabled={page== data?.first} 
                    onClick={()=>setPage(page-1)}
                >
                    previus page
                </button>
                <div className={styles.paginationActive}> <span>{page}</span> </div>
                <button 
                    className={styles.paginationButton} 
                    disabled={page== data?.last} 
                    onClick={()=>setPage(page+1)}
                >
                    next page
                </button>
            </div>
        </>
    )

}

export default Home