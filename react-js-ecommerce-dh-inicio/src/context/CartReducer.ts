export const inicialState = {
    cartItems:[]
}

/*
modelo del objeto action: 

action:{
    type: "ADD_TO_CART"/"REMOVE_FROM_CART"
    payload: product
}

*/

export const cartReducer = (state, action) => {

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

        default:
            return state
    }
}