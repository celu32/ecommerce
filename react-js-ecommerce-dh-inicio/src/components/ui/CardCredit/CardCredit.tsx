import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styles from './CardCredit.module.css'
import { useState } from 'react';

const CardCredit = () => {

    
    const [state, setState] = useState({
          number: '',
          expiry: '',
          cvc: '',
          name: '',
          focus: '',
    });
    

    const handleInputChange = (evt) => {
        const { name, value } = evt.target; 
        setState((prev) => ({ ...prev, [name]: value }));
    }
        
    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }

  return (
        <div className={styles.container}>
            <div>
            <Cards 
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
                />
            </div>

            <form action="">
                <div className={styles.formControl}>
                    <label htmlFor="number">Card Number</label>
                    <input 
                        type="text" 
                        name= "number" 
                        id="number"
                        value={state.number}
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
                        value={state.name}
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
                            value={state.expiry}
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
                            value={state.cvc}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus} 
                        />
                    </div>
                </div>
            </form>
            <button className={styles.buyButton}>Buy Now</button>
        </div>
    )
}

export default CardCredit