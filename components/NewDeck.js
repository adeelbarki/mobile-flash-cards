import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'
import { saveDeckTitle } from '../utils/api'
import { addDeck } from '../actions'
import { white, purple } from '../utils/colors'

class NewDeck extends Component {
    state = {
        title: ''
    }


    submit = () => {
        const { title } = this.state
        const { dispatch, navigation } = this.props


        if (title) {
            saveDeckTitle(title)

            dispatch(addDeck(title))

            navigation.navigate('DeckView', { entryId: title })

            this.setState({ title: '' })
        }


    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>What is the title of your new Deck?</Text>
                <TextInput
                    placeholder="New Deck"
                    style={styles.input}
                    value={this.state.title}
                    onChangeText={(title) => this.setState({ title: title })}
                />
                <TouchableOpacity
                    style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, { backgroundColor: purple }]}
                    onPress={this.submit}>
                    <Text style={[styles.submitBtnText, { color: white }]}>Add New Deck</Text>
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

export default connect()(NewDeck)