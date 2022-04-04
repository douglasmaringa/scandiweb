import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomeScreen from "./screens/HomeScreen"
import ProductDetail from './screens/ProductDetail';
import CartScreen from './screens/CartScreen';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route path="/details" component={ProductDetail}/>
                    <Route path="/cartscreen" component={CartScreen}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
