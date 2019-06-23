import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { purple, red, white, gray } from '../utils/colors'

class QuizView extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Quiz'
        }
    
    }
    render() {
        const deck = this.props.navigation.state.params.entryId
        const { questions } = deck
        
        return (
            <View style={styles.container}>
                {questions.map((questions, key) => 
                    <Text key={key}>{questions.question} {questions.answer}</Text>           
                    )}
                {/* <Text style={styles.text}>Sample question Test</Text> */}
                <TouchableOpacity
                    style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, { backgroundColor: purple }]}
                    onPress={null}>
                    <Text style={[styles.submitBtnText, { color: white }]}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, { backgroundColor: red, marginTop: 10}]}
                    onPress={null}>
                    <Text style={[styles.submitBtnText, { color: white }]}>Incorrect</Text>
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
    text: {
        padding: 10,
        fontSize: 35,
        justifyContent: 'center',
        alignItems: 'center'
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

export default QuizView