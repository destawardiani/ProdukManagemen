import Axios from 'axios';
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { Card, CardSection, Input, InputPicker } from './common';

class ProductForm extends Component {
    state = {
        categoryList:  []
    }
    componentDidMount() {
        if (this.props.hasCategory) {
            this.setState({ categoryList: this.props.categoryList })
        } else {
            this.setState({ loadCategory: true })
            axios
                .get('https://simple-ecommerce-9999.herokuapp.com/api/v1/product')
                .then(({ data, status }) => {
                    console.log('DATA: ' + data.data);
                    this.setState({ categoryList: data.data })
                    this.props.dispatch({ type: 'SET_CATEGORY_LIST', payload: data.data })
            })
        }
    }
    render() {
        const pickerData = this.state.categoryList.map(item => {
            return {
                label: item.name,
                value: item.id
            }
        })
        return (
            <>
                <CardSection>
                    <Input label="Name" placeholder="Product name" />
                </CardSection>
                <CardSection>
                    <Input label="Price" placeholder="Product Price" />
                </CardSection>
                <CardSection>
                    <Input label="Image" placeholder="https://....." />
                </CardSection>
                <CardSection>
                    <Input label="Action Link" placeholder="https://....." />
                </CardSection>
                <CardSection>
                    <InputPicker label="Category" data={} />
                </CardSection>
            </>
        );
    }
}

const mapStateToProps = (state)  => {
    return {
        hasCategory: state.categoryList.hasCategory,
        categoryList: state.categoryList.categoryList,
    }
}

export default connect(mapStateToProps)(ProductForm);