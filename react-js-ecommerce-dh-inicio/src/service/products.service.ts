import Products from '../interface/product'

interface response {
    "first": number,
    "prev": number,
    "next": number,
    "last": number,
    "pages": number,
  " items": number,
  "data": Products[]
}

export const getProducts = async (page: number, cant:number): Promise<response> => {
    try {
        const response = await fetch(`http://localhost:3000/products?_page=${page}&_per_page=${cant}`)

        if (response.ok){
          const data = await response.json()
          if(data.data.length > cant){
            data.data = data.data.slice(0, cant);
          }
        return data  
        }
        else {
            throw new Error('Faild to fetch products')
        }
    }
    catch (error){ 
        console.log(error)
        throw new Error('Network error')
    }
}