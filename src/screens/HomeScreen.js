import React, { Component } from 'react';
import "./homescreen.css"
import ProductCard from '../components/ProductCard';
import { connect } from 'react-redux'
import {addToState} from "../components/actions/cartActions"

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


class HomeScreen extends Component {
  componentDidMount() {
    const client = new ApolloClient({
      uri: 'http://localhost:4000/',
      cache: new InMemoryCache()
    });
    
  
    client
    .query({
    query: gql`
      query getcategories {
          category{
              name
              products{
                  id
                  name
                  category
                  inStock  
                  brand
                  gallery
                  prices{
                      amount
                      currency{
                          label
                          symbol
                      }
                  } 
                  attributes{
                      id
                      items{
                        displayValue
                      }
                      type
                    }   
            }
        }
      }
    `
    })
    .then((result) => {
      console.log(result.data.category.products)
      
      this.props.addToState(result.data.category.products);
    })
  
  }
  
  render() {
   
    //console.log(this.props.items)
   
    
    return (
      <div className='home'> 
          <h2>Category Name</h2>
          <div className='home-card'>
            {
              this.props.items.map((e)=>(
                <div key={e.id}>
                <ProductCard data={e}/>
                </div>
              ))
            }
         
          </div>
         
     </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}

const mapDispatchToProps= (dispatch)=>{
    
  return{
      addToState: (products)=>{dispatch(addToState(products))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)
