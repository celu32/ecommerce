import { useNavigate } from "react-router-dom"
import styles from "./Dashboard.module.css"
import { useEffect, useState } from "react"
import Navbar from "../../components/ui/Navbar/Navbar"
import { useMutation } from "react-query"
import Product from "../../interface/product"
import { postProduct } from "../../service/products.service"

const Dashboard = () => {

    const navigate = useNavigate()

    const mutation = useMutation((newProduct: Product)=>{
        return postProduct(newProduct)
    })

    const [product, setProduct] = useState({
        "title": "",
        "price": 0,
        "category": "",
        "image":""
    })

    useEffect(() => {
        const userLogin = localStorage.getItem('userLogin')
        if(!userLogin){
            navigate('/login')
        }
    }, [])
   


    const handleChange = (e : React.ChangeEvent <HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
          ...prevProduct,
          [name]: value
        }))
    }

    const handleSubmit = (e : React.FormEvent <HTMLFormElement>) => {
        e.preventDefault
        mutation.mutate(product)
    }

  return (
    <>
    <Navbar />
    <div className={styles.container}>
    
        <div>
            <h2>Dashboard</h2>
        </div>
        <form onSubmit={handleSubmit}>
            <div className={styles.formControlLogin}>
                <label htmlFor="title">Title</label>
                <input 
                type="text" 
                id= "title"
                name= "title"
                value={product.title}
                onChange={handleChange}
                required
                 />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="price">Price</label>
                <input 
                type="number" 
                id= "price"
                name= "price"
                value= {product.price}
                onChange={handleChange}
                required
                 />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="category">Category</label>
                <input 
                type="text" 
                id= "category"
                name= "category"
                value= {product.category}
                onChange={handleChange}
                required
                 />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="image">Image</label>
                <input 
                type="text" 
                id= "image"
                name= "image"
                value= {product.image}
                onChange={handleChange}
                required
                 />
            </div>
            <button type="submit">Add Product</button>
        </form>
    </div>
    </>
  )
}

export default Dashboard