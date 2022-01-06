import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AddItem = ({addItem}) => {
    const [text, setText] = useState('')

    const onChange = (textValue) => setText(textValue)

    return (
        <View>
            <TextInput 
                placeholder='Add item'
                style={styles.input}
                onChangeText={onChange}
            />
            <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
                <Text style={styles.btnText}> <Icon name='plus' size={20}/> Add Item</Text>
                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height:60,
        padding:8,
        fontSize:16,
    },
    btn: {
        backgroundColor:'#eeb609',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:9,
        margin:5,
    },
    btnText: {
        color:'darkslateblue',
        fontSize:20,
        textAlign:'center',
    }
})

export default AddItem;