import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Platform, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import { white, purple, gray } from '../utils/colors'


class DeckView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Deck</Text>
                <TouchableOpacity
                    style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, { backgroundColor: white }]}
                    onPress={() => this.props.navigation.navigate('AddCard')}>
                    <Text style={[styles.submitBtnText, { color: gray }]}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, { backgroundColor: purple }]}
                    onPress={() => this.props.navigation.navigate('QuizView')}>
                    <Text style={[styles.submitBtnText, { color: white }]}>Start Quiz</Text>
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



export default connect()(DeckView)

