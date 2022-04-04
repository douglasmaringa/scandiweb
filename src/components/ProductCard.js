import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import "./productcard.css"

export default class ProductCard extends Component {
  render() {
    //console.log(this.props.data)
    return (
      <div className='product-card'>
          <div className='product-image'>
            {
              this.props.data.gallery?(<>
                 <img className="fishes" src={this.props.data.gallery[0]} width={350} height={330} alt="" />
              </>):(<></>)
            }
       
          <div className='product-image-btn'>
          <img  className="fish" src="/btn.png" alt="" />
          </div>
          </div>
         {
           this.props.data.prices?(<>
            <Link to={{pathname: `/details`,state: this.props.data}}><h3>{this.props.data.name} <br/><span>${this.props.data.prices[0].amount}</span></h3></Link>
     
           </>):(<></>)
         }
          </div>
    )
  }
}
