import React, { Component } from 'react'
import "./productdetail.css"
import { connect } from 'react-redux'
import {addToCart} from "../components/actions/cartActions"


class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {size: "M"};
  }

handleClick = (id,size)=>{
    console.log(size,id)
    this.props.addToCart(id,size); 
}

pickXS = () => {
  this.setState({size: "XS"});
}

pickS = () => {
  this.setState({size: "S"});
}

pickM = () => {
  this.setState({size: "M"});
}

pickLarge = () => {
    this.setState({size: "L"});
  }

  render() {
    console.log(this.state.size)
    return (
      <div className='details'>
        <div className='details-left'>
        <img src="/image.png" width={80} height={80} alt="" />
        <img src="/image.png" width={80} height={80} alt="" />
        <img src="/image.png" width={80} height={80} alt="" />
        </div>

        <div className='details-center'>
         <img src={this.props.location.state.gallery[0]} width={580} height={400} alt="" />
        </div>

        <div className='details-right'>
          <h1>{this.props.location.state.name}</h1>
          <h2>Running Short</h2>
          <h2>Size:</h2>
          
          <div className='details-sizes'>
          {(() => {
        switch (this.state.size) {
          case 'XS':   return (<>
          <button onClick={()=>{this.pickXS()}} className='black-button'>XS</button>
            <button onClick={()=>{this.pickS()}} className='normal-button'>S</button>
            <button onClick={()=>{this.pickM()}} className='normal-button'>M</button>
            <button onClick={()=>{this.pickLarge()}} className='normal-button'>L</button>
          
          </>);
          case 'S': return (<>
          <button onClick={()=>{this.pickXS()}} className='normal-button'>XS</button>
            <button onClick={()=>{this.pickS()}} className='black-button'>S</button>
            <button onClick={()=>{this.pickM()}} className='normal-button'>M</button>
            <button onClick={()=>{this.pickLarge()}} className='normal-button'>L</button>
          
            </>);
          case 'M':  return (<>
          <button onClick={()=>{this.pickXS()}} className='normal-button'>XS</button>
            <button onClick={()=>{this.pickS()}} className='normal-button'>S</button>
            <button onClick={()=>{this.pickM()}} className='black-button'>M</button>
            <button onClick={()=>{this.pickLarge()}} className='normal-button'>L</button>
          
            </>);
            case 'L':  return (<>
                <button onClick={()=>{this.pickXS()}} className='normal-button'>XS</button>
            <button onClick={()=>{this.pickS()}} className='normal-button'>S</button>
            <button onClick={()=>{this.pickM()}} className='normal-button'>M</button>
            <button onClick={()=>{this.pickLarge()}} className='black-button'>L</button>
                
                  </>);
          default:      return (<>
          
         
            </>);
        }
      })()}
            
          </div>
          <h1>Price:<br/><span>${this.props.location.state.prices[0].amount}</span></h1>
         <button onClick={()=>{this.handleClick(this.props.location.state.id,this.state.size)}} className='green-button'>ADD TO CART</button>
         <p>{this.props.location.state.desc}</p>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps= (dispatch)=>{
    
  return{
      addToCart: (id,size)=>{dispatch(addToCart(id,size))}
  }
}

export default connect(null,mapDispatchToProps)(ProductDetail)
