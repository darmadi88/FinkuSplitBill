import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

const Input = (props) => {
    return (
        <View>
            <View style={{flexDirection: "row"}}>
                <Text style={style.inputLabel}>{props.label}</Text>
            </View>
            <TextInput style={style.input} placeholder={props.placeholder} value={props.value} onChangeText={props.onChangeText} />
        </View>
    )
}

const style = StyleSheet.create({
    inputLabel: {
        fontSize: 12,
        marginLeft: 8,
        paddingHorizontal: 8,
        paddingVertical: 2,
        top: 10,
        width: 'auto',
        zIndex: 10,
        backgroundColor: '#fff',
        marginBottom: 4,
        fontWeight: 'bold'
    },
    input: {
        margin: 0,
        padding: 16,
        paddingVertical: 8,
        borderColor: '#ccc',
        borderRadius: 8,
        borderWidth: 1,
        // backgroundColor: '#fafafa',
        fontWeight: 'bold'
    },
})

export default Input;