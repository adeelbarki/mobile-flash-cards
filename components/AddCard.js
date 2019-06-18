import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { white, purple } from '../utils/colors'
class AddCard extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Add Card'
        }
    
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Question" style={styles.input} />
                <TextInput placeholder="Answer" style={styles.input}/>
                <TouchableOpacity
                    style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, { backgroundColor: purple, marginTop: 20}]}
                    onPress={null}>
                    <Text style={[styles.submitBtnText, { color: white }]}>Add Card</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white, 
    },
    input: {
        backgroundColor: '#efefef',
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: purple,
        fontSize: 22,
    },
    iosSubmitBtn: {
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
    },
    androidSubmitBtn: {
        padding: 10,
        paddingBottom: 10,
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 30,
        //borderColor: gray,
        height: 50,
        width: 250,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitBtnText: {
        fontSize: 22,
        textAlign: 'center',
    },
})

export default AddCard