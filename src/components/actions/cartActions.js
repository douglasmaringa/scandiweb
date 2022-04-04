
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_TO_STATE} from './action-types/cart-actions'

//add cart action
export const addToCart= (id,size)=>{
    return{
        type: ADD_TO_CART,
        id,
        size
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    console.log("id is",id)
    return{
        type: ADD_QUANTITY,
        id
    }
}
//add cart action
export const addToState= (products)=>{
    console.log("is extendable",Object.isExtensible(products))
  
    return{
        type: ADD_TO_STATE,
        products
    }
}