import React, { Component } from 'react'
import "./cartscreen.css"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../components/actions/cartActions'
import Recipe from '../components/Recipe'

class CartScreen extends Component {
  //to remove the item completely
  handleRemove = (id)=>{
    this.props.removeItem(id);
}
//to add the quantity
handleAddQuantity = (id)=>{
    this.props.addQuantity(id);
}
//to substruct from the quantity
handleSubtractQuantity = (id)=>{
    this.props.subtractQuantity(id);
}
  render() {
    console.log(this.props.items)
    let addedItems = this.props.items.length ?
    (  
        this.props.items.map(item=>{
            return(
      <div className='cartscreen'>

              <li key={item.id}>
              <div  className='cart-card'>
              <div className='cart-left'>
              <h1>{item.title} <br/><span>Running Short</span><br/> ${item.prices[0].amount}</h1>
              <button className='black-button'>{item.size}</button>
              </div>

              <div className='cart-right'>
                <div className='cart-right-left'>
                <Link to="/cartscreen"><button onClick={()=>{this.handleAddQuantity(item.id)}} className='normal-button2'>+</button></Link>
                    <p>{item.quantity}</p>
                   <Link to="/cartscreen"><button onClick={()=>{this.handleSubtractQuantity(item.id)}} className='normal-button2'>-</button></Link> 
                </div>
                <div className='cart-right-right'>
                    <img src={item.gallery[0]} width={140} height={180} alt="" />
                </div>
              </div>
          </div>
</li>
            </div>    
                )
              })
          ):

           (
              <p>Nothing.</p>
           )
     return(
          <div className='cartscreen' >
             
             <Recipe />
                      {addedItems}
              
                  
          </div>
     )
  }
}

const mapStateToProps = (state)=>{
  return{
      items: state.addedItems,
      //addedItems: state.addedItems
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
      removeItem: (id)=>{dispatch(removeItem(id))},
      addQuantity: (id)=>{dispatch(addQuantity(id))},
      subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartScreen)
