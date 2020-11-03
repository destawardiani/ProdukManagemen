import React, { Component } from 'react';
import productForm from '../reducers/productForm';

import { Card } from './common';
import ProductForm from './ProductForm';

class ProductCreate extends Component {
    render() {
        return (
            <Card>
                <productForm />
            </Card>
        );
    }
}

export default ProductCreate;