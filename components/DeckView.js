import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { white, purple, gray } from '../utils/colors'

function AddCardBtn({ onPress }) {
    return (
        <TouchableOpacity 
            style={[Platform.OS ==='ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, {backgroundColor: white}]}
            onPress={onPress}>
            <Text style={[styles.submitBtnText, {color: gray}]}>Add Card</Text>
        </TouchableOpacity>
    )
}
function QuizBtn({ onPress }) {
    return (
        <TouchableOpacity 
            style={[Platform.OS ==='ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, {backgroundColor: purple}]}
            onPress={onPress}>
            <Text style={[styles.submitBtnText, {color: white}]}>Start Quiz</Text>
        </TouchableOpacity>
    )
}



class DeckView extends Component {

    toAddCard = () => {
        this.props.navigation.dispatch(NavigationActions.back({
            key: 'AddCard'
        }))
    }

    takeQuiz = () => {
        this.props.navigation.dispatch(NavigationActions.back({
            key: 'QuizView'
        }))
    }

    render() {
        return (
            <View style={styles.container}>
                <AddCardBtn onPress={null} />
                <QuizBtn onPress={null} />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white,
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



export default DeckView

