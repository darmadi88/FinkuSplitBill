import { PROPERTY_TYPES } from '@babel/types';
import React from 'react';
import { View, TouchableNativeFeedback, StyleSheet, Text } from 'react-native';

const Button = (props) => {
    return (
        <TouchableNativeFeedback {...props}>
            <View style={[style.buttonContainer, {...props.buttonStyle}]}>
                <Text style={[style.buttonText, {...props.textStyle}]}>{props.text}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

const style = StyleSheet.create({
    buttonContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#ddd',
        borderWidth: 1,
        elevation: 1,
        borderColor: '#ddd',
        borderRadius: 8,
    },
    buttonText: {
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})

export default Button;