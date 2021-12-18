import React, { useContext, useEffect, useState } from 'react';
import { TouchableNativeFeedback } from 'react-native';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';
import TransactionContext from '../context/transaction/transactionContext';
import Button from './Button';

const PersonItemInput = ({ person, item }) => {
    const transactionContext = useContext(TransactionContext);
    const { updateItemToPersonItem } = transactionContext;

    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        updateItemToPersonItem(person.id, item.id, quantity);

    }, [quantity])

    return (
        <View style={style.personItemInput}>
            <Text style={{fontWeight: 'bold', flex: 1}}>{person.name}</Text>
            <View style={[style.itemRow, {flex: 1}]}>
                <Button onPress={() => quantity > 0 && setQuantity(quantity - 1)} text=" - " textStyle={{ fontSize: 12 }} buttonStyle={{ paddingVertical: 4, paddingHorizontal: 8, marginRight: 8 }} />
                <Text style={{width: 30, textAlign: 'right', paddingHorizontal: 8}}>{String(quantity)}</Text>
                <Button onPress={() => setQuantity(quantity + 1)} text=" + " textStyle={{ fontSize: 12 }} buttonStyle={{ paddingVertical: 4, paddingHorizontal: 8, marginRight: 8 }} />
            </View>
            <Text style={{flex: 1, textAlign: 'right', fontWeight: 'bold'}}>Rp. {quantity * item.price}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    personItemInput: {
        paddingHorizontal: 16, 
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#d0d0d0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default PersonItemInput;