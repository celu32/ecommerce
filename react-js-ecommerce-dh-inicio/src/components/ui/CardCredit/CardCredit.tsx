import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styles from './CardCredit.module.css'
import { useState } from 'react';
import { toast } from 'sonner'
import useCartContext from '../../../hooks/useCartContext';
import CartProdct from '../../../interface/cartProduct';


const CardCredit = () => {

    const [cardData, setCardData] = useState({
          number: '',
          expiry: '',
          cvc: '',
          name: '',
          focus: '',
    });

    const {dispatch} = useCartContext()

    const {number, expiry, cvc, name, focus} = cardData

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>)  => {
        const { name, value } = e.target; 
        setCardData((prev) => ({ ...prev, [name]: value }));
    }
        
    const handleInputFocus = (e : React.FocusEvent<HTMLInputElement>) => {
        setCardData((prev) => ({ ...prev, focus: e.target.name }));
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if([number, expiry, cvc, name].includes('')){
            toast.error('All fields are required')
            return
        }
        toast.success('Your payment has been processed successfully')
        setCardData({
            number: '',
            expiry: '',
            cvc: '',
            name: '',
            focus: '',
        })
        dispatch({type:"CLEAR_CART", payload:{} as CartProdct})
        
    }

  return (
        <div className={styles.container}>
            <div>
            <Cards 
                number={number}
                expiry={expiry}
                cvc={cvc}
                name={name}
                focused={focus as any}
                />
            </div>

            <form onSubmit={handleSubmit}>
                <div className={styles.formControl}>
                    <label htmlFor="number">Card Number</label>
                    <input 
                        type="text" 
                        name= "number" 
                        id="number"
                        value={number}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}  
                    />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="name">Card Name</label>
                    <input 
                        type="text" 
                        name= "name" 
                        id="name"
                        value={name}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}  
                    />
                </div>
                <div className={styles.formInputGrup} >
                    <div className={styles.formControl} >
                        <label htmlFor="expiry">Card Expiry</label>
                        <input 
                            type="text" 
                            name= "expiry" 
                            id="expiry"
                            value={expiry}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus} 
                        />
                    </div>
                    <div className={styles.formControl} >
                        <label htmlFor="cvc">Card CVC</label>
                        <input 
                            type="password" 
                            name= "cvc" 
                            id="cvc" 
                            value={cvc}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus} 
                        />
                    </div>
                </div>
                <button type='submit' className={styles.buyButton}>Buy Now</button>
            </form>
            
        </div>
    )
}

export default CardCredit