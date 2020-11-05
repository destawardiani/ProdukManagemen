import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Card, CardSection } from './common';

import ProductForm from './ProductForm';
import axios from 'axios';

class ProductCreate extends Component {
    onButtonPress() {
        const data = this.props.form
        const url = 'https://simple-ecommerce-9999.herokuapp.com/api/v1/product'

        axios
            .post(url, data)
            .then(() => {
                this.props.dispatch({ type: 'RESET_PRODUCT' })
                this.props,navigation.navigate('Product List')
            })
    }
    render() {
        return (
            <Card>
                <ProductForm />
                <CardSection>
                    <Button onPress={() => this.onButtonPress()}>
                        Save
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        form: state.productForm
    }
}

export default connect(mapStateToProps)(ProductCreate);