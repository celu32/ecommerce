import CartProdct from "../interface/cartProduct"

export interface CartState{
    cartItems:CartProdct[]
}

export const inicialState: CartState = {
    cartItems:[]
}



export interface CartAction{
    type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "CLEAR_CART";
    payload: CartProdct
}


export const cartReducer = (state: CartState, action: CartAction) : CartState => {

    switch (action.type) {

        case "ADD_TO_CART": {
            
            const {id} = action.payload

            const existingItem = state.cartItems.find((item)=>item.id === id)

            if(existingItem){
                return{
                    ...state,
                    cartItems:state.cartItems.map((item)=>item.id === id ? {...existingItem, quantity: existingItem.quantity + 1} : item)
                }
            } else { return{
                 ...state,
                cartItems: [...state.cartItems, action.payload]
                }   
            }


        }   
        
        case "REMOVE_FROM_CART": {

            const {id} = action.payload

            const itemToRemove = state.cartItems.find((item)=>item.id === id)

            if (itemToRemove) {

                if(itemToRemove.quantity === 1){
                    return{
                        ...state,
                        cartItems:state.cartItems.filter((item)=>item.id !== id )
                       

                    }
                } else {
                    return{
                    ...state,
                    cartItems:state.cartItems.map((item)=>item.id === id ? {...itemToRemove, quantity: itemToRemove.quantity - 1} : item)
                    }
                    
                }
            }
            else{
                return state
            }
        }

        case "CLEAR_CART": {
            return{
                ...state,
                cartItems:[]
            }
            
        }

        default:
            return state
    }
}