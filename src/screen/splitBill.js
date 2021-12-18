import React, { useContext } from 'react';
import { TouchableNativeFeedback } from 'react-native';
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';
import Button from '../components/Button';
import PersonItems from '../components/PersonItems';
import TransactionContext from '../context/transaction/transactionContext';

const SplitBill = ({ navigation }) => {
    const transactionContext = useContext(TransactionContext);
    const { persons } = transactionContext;



    return (
        // <View>
        //     <ScrollView>
        //         <Text>Touch item to see detail</Text>
        //         {persons.map(person => <PersonItems person={person} />)}
        //     </ScrollView>
        //     <Button text="Kembali" />
        // </View>



        <View style={{ flex: 1 }}>
            <View style={{ padding: 16 }}>
                <Text>Touch item to see detail</Text>
            </View>
            <ScrollView style={{borderTopWidth: 1, borderTopColor: '#ddd'}}>
                {persons.map(person => <PersonItems person={person} />)}
            </ScrollView>
            <View style={{ padding: 16 }}>
                <Button text="Kembali" onPress={() => navigation.pop()} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    itemContainer: {
        padding: 16,
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    personItem: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#d5d5d5',
        backgroundColor: "#fafafa"
    },
    personItemName: {
        fontWeight: 'bold',
        fontSize: 16,
    }
})

export default SplitBill;