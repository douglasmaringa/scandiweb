import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_TO_STATE } from '../actions/action-types/cart-actions'
import items from "./data"



//console.log(Object.isExtensible(items)) true
const initState = {
    items: [],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //edit chosen size
          console.log(action.size)
         
          //error here
          addedItem.size = action.size
          console.log(addedItem)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
        
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + parseFloat(addedItem.prices[0].amount)
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + parseFloat(addedItem.prices[0].amount)
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.prices[0].amount * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        
        let addedItem = state.addedItems.find(item=> item.id === action.id)
        //console.log("is extendable",Object.isExtensible(addedItem))
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.prices[0].amount
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.addedItems.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        console.log(addedItem.quantity)
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - parseFloat(addedItem.prices[0].amount)
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - parseFloat(addedItem.prices[0].amount)
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_TO_STATE){
        console.log(action.products)
        //console.log("is extendable",Object.isExtensible(action.products))
        console.log("is extendable",Object.isExtensible(JSON.parse(JSON.stringify(action.products))))
          return{
              ...state,
              items: JSON.parse(JSON.stringify(action.products))
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
