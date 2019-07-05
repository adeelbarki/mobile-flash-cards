import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import TextButton from './TextButton'
import { purple, red, white, gray } from '../utils/colors'

class QuizView extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Quiz'
        }
    }

    state = {
        activeQuestion: 0,
        showQuestion: false,
        correctAnswer: 0,
        incorrectAnswer: 0,
    }

    seeAnswer = () => {

    }

    toggleAnswerQuestion = () => {
        const showQuestion = this.state.showQuestion
        if (!showQuestion) {
            this.setState({
                showQuestion: true,
            })
        } else {
            this.setState({
                showQuestion: false,
            })
        }
    }

    submit = (ans) => {

        if (ans === true) {
            this.setState({
                correctAnswer: this.state.correctAnswer + 1
            })
        } else if(ans === false){
            this.setState({
                incorrectAnswer: this.state.incorrectAnswer + 1
            })
        }
        this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            showQuestion: false
        })
    }

    restartQuiz = () => {
        this.setState({
            activeQuestion: 0,
            showQuestion: false,
            correctAnswer: 0,
            incorrectAnswer: 0,
        })
    }

    render() {
        const { decks, navigation } = this.props
        const { activeQuestion, showQuestion } = this.state
        const deck = navigation.state.params.entryId
        const currentQuestion = activeQuestion + 1

        if (activeQuestion === decks[deck].questions.length) {
            return (
                <View style={styles.container}>
                    <View style={styles.row}>
                        {this.state.correctAnswer > this.state.incorrectAnswer
                            ? <Text style={{ fontSize: 70 }}>😊</Text>
                            : <Text style={{ fontSize: 70 }}>😒</Text>
                        }
                        <Text style={{ fontSize: 40, textAlign: 'center' }}>You got {this.state.correctAnswer} out of {decks[deck].questions.length} correct </Text>
                        <TouchableOpacity
                            style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, { backgroundColor: purple }]}
                            onPress={this.restartQuiz}>
                            <Text style={[styles.submitBtnText, { color: white }]}>Restart Quiz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, { backgroundColor: white }]}
                            onPress={() => this.props.navigation.navigate('DeckView')}>
                            <Text style={[styles.submitBtnText, { color: gray }]}>Back to Deck</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <Text style={{ color: gray, fontSize: 18, alignSelf: 'flex-start' }}>{currentQuestion} / {decks[deck].questions.length}</Text>
                <View style={styles.row}>

                    {!showQuestion
                        ? <Text style={{ fontSize: 40, textAlign: 'center' }}>{decks[deck].questions[activeQuestion].question}</Text>
                        : <Text style={{ fontSize: 40, textAlign: 'center' }}>{decks[deck].questions[activeQuestion].answer}</Text>
                    }

                    {!showQuestion
                        ? <TextButton onPress={this.toggleAnswerQuestion} style={{ fontSize: 30 }}>Show Answer</TextButton>
                        : <TextButton onPress={this.toggleAnswerQuestion} style={{ fontSize: 30 }}>Show Question</TextButton>
                    }

                </View>
                <TouchableOpacity
                    style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, { backgroundColor: purple }]}
                    onPress={() => this.submit(true)}>
                    <Text style={[styles.submitBtnText, { color: white }]}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, { backgroundColor: red, marginTop: 10 }]}
                    onPress={() => this.submit(false)}>
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
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: white,
    },
    row: {
        flex: 1,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 20,
        height: 200,
        width: 400,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        borderColor: gray,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 4,
        shadowOpacity: 0.8,

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

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(QuizView)