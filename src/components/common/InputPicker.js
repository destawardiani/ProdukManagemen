import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';

const style = StyleSheet.create({
    container: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#007aff',
        borderBottomWidth: 1
    },
    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    input: {
        flex: 2,
        color: 'black',
        fontSize: 18,
        height: 50,
    },
})

class InputPicker extends Component {
    render() {
        const { label, data, selectedValue, onValueChange } = this.props

        const renderPickerItem = data.map((item, i) =>
            <Picker.Item key={i} label={item.label} value={item.value} />
        )
        
        return (
        <View style={ style.container }>
            <Text style={ style.label }>
                { label }
            </Text>
            <Picker
                selectedValue={ selectedValue }
                onValueChange={ onValueChange }
                style={ style.input }>
                { renderPickerItem }
            </Picker>
        </View>
        );
    }
}

export default InputPicker;