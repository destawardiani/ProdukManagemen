import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

import ProductItem from './ProductItem'

class ProductList extends Component {
    state = { 
        products: []
     }

     componentDidMount() {
        axios
            .get('https://simple-ecommerce-9999.herokuapp.com/api/v1/product')
            .then(({ data, status }) => {
                console.log('CODE: ' + data.code);
                console.log('DATA: ' + data.data);

                this.setState({ products: data.data })
            })
     }

     renderProducts() {
        return this.state.products.map(product => 
            <ProductItem product={ product } key={ product.id } />
        )
    }

    render() {
      return (
        <ScrollView>
          { this.renderProducts() }
        </ScrollView>
      )
    }
  }
  export default ProductList;