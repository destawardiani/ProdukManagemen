import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';

import {Card, Button, CardSection } from './common'


const style = StyleSheet.create({
    productImage: {
        flex: 1,
        width: 100,
        height: 300
    },
    productName: {
        flex: 1,
        fontSize: 18
    },
    productPrice: {
        width: 100,
        textAlign: 'right',
        fontSize: 18,
        color: 'navy'
    }
})

class ProductItem extends Component {
    getPriceFormatted(price) {
        if (price) {
            const PriceFormatted = parseInt(price)
            .toString()
            .split()
            .reverse()
            .reduce((a, c, i) => c + (i && i % 3 === 0 ? '.' : '') + a, '') 
  
          return `Rp${PriceFormatted}`
        }
        return 'Rp0'
    }

    render() {
        const {
            name,
            image,
            price,
            actionLink,
        } = this.props.product

        return (
        <Card> 
          <CardSection>
            <Image style={ style.productImage } source={ { uri: image } } />
          </CardSection>
          <CardSection>
            <Text style={ style.productName }>
                { name }
            </Text>
            <Text style={ style.productPrice }>
                { this.getPriceFormatted(price) }
            </Text>
          </CardSection>  
          <CardSection>
            <Button onPress={ () => Linking.openURL('https://wa.me/6289677004847?text=Hai admin, saya tertarik dengan produk ' + name) }> 
                Buy Now
            </Button>
          </CardSection>
        </Card>  
        );
      }
    }

export default ProductItem