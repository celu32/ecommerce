import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styles from './CardCredit.module.css'
import { useState } from 'react';
import { toast } from 'sonner'

const CardCredit = () => {

    const [cardData, setCardData] = useState({
          number: '',
          expiry: '',
          cvc: '',
          name: '',
          focus: '',
    });

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
            console.log('All fields are required')
            toast.error('All fields are required')
            return
        }
        setCardData({
            number: '',
            expiry: '',
            cvc: '',
            name: '',
            focus: '',
      })
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
                            type="text" 
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