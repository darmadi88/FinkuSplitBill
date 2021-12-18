import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableNativeFeedback
} from 'react-native';
import TransactionContext from '../context/transaction/transactionContext';

const PersonItems = ({ person }) => {
    const transactionContext = useContext(TransactionContext);
    const { personItems } = transactionContext;

    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [showDetail, setShowDetail] = useState(false);

    useState(() => {
        let total = 0
        let x = personItems.filter(item => {
            if (item.personId == person.id && item.quantity > 0) {
                total += Number(item.quantity * item.itemPrice);

                
                return true
            } else {
                return false
            }
        })
        
        setTotalAmount(String(total))

        setItems(x)
    }, [])

    return (
        <View style={style.itemContainer}>
            <TouchableNativeFeedback onPress={() => setShowDetail(!showDetail)}>
                <View style={style.itemRow}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>{person.name}</Text>
                    <Text style={{fontWeight:'bold', fontSize: 18}}>Rp. {totalAmount}</Text>
                </View>
            </TouchableNativeFeedback>
            {
                showDetail && 
                <View style={style.childContainer}>
                    {items.map(item => {
                        return (
                            <View style={style.childItem}>
                                <Text style={{ flex: 4, fontWeight: 'bold' }}>{item.itemName}</Text>
                                <Text style={{ flex: 1, textAlign: 'right' }}>{item.quantity}</Text>
                                <Text style={{marginHorizontal: 8}}> X </Text>
                                <Text style={{ flex: 1, textAlign: 'right' }}>{item.itemPrice}</Text>
                                <Text style={{marginHorizontal: 8}}> = </Text>
                                <Text style={{ flex: 2, textAlign: 'right', fontWeight: 'bold' }}>Rp. {item.quantity * item.itemPrice}</Text>
                            </View>
                        )
                    })}
                </View>
            }
        </View>
    )
}

const style = StyleSheet.create({
    itemContainer: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fafafa'
    },
    itemRow: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    childContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#eee',
        overflow: 'hidden',
        borderRadius: 8,
        margin: 16,
        marginTop: 0
    },
    childItem: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
})

export default PersonItems;