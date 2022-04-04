import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
  });

  
const store = createStore(cartReducer);

ReactDOM.render(
<ApolloProvider client={client}>
<Provider store={store}>
    <App />
</Provider>
</ApolloProvider>
, document.getElementById('root'));

