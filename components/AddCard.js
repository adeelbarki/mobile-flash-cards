import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, StyleSheet, Platform, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'
import { white, purple } from '../utils/colors'
class AddCard extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Add Card'
        }

    }

    state = {
        question: '',
        answer: '',
    }

    submit = (title) => {
        const { question, answer } = this.state
        const { dispatch, navigation } = this.props

        if (question && answer) {
            dispatch(addCard({ question, answer, title }))
            addCardToDeck(title, { question, answer, })
            this.setState({
                question: '',
                answer: '',
            })

            navigation.dispatch(NavigationActions.back({ key: null }))
        }



    }


    render() {
        const title = this.props.navigation.state.params.entryId
        const { question, answer } = this.state

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View>
                    <TextInput
                        placeholder="Question"
                        style={styles.input}
                        onChangeText={(question) => this.setState({ question })}
                        value={question}
                    />
                    <TextInput
                        placeholder="Answer"
                        style={styles.input}
                        onChangeText={(answer) => this.setState({ answer })}
                        value={answer}
                    />
                    <TouchableOpacity
                        style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, { backgroundColor: purple, marginTop: 20 }]}
                        onPress={() => this.submit(title)}>
                        <Text style={[styles.submitBtnText, { color: white }]}>Add Card</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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

export default connect()(AddCard)