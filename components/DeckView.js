import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Platform, StyleSheet, Animated } from 'react-native'
import { connect } from 'react-redux'
import { white, purple, gray } from '../utils/colors'


class DeckView extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Deck'
        }

    }


    render() {
        const deck = this.props.navigation.state.params.entryId
        const { decks } = this.props 

        return (
            <View style={styles.container}>
                <Text style={[styles.item, { fontSize: 40 }]}>{decks[deck].title}</Text>
                <Text style={[styles.item, { fontSize: 18, color: gray }]}>{decks[deck].questions.length} cards</Text>
                <TouchableOpacity
                    style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, { backgroundColor: white }]}
                    onPress={() => this.props.navigation.navigate('AddCard', { entryId: deck })}>
                    <Text style={[styles.submitBtnText, { color: gray }]}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, { backgroundColor: purple }]}
                    onPress={() => this.props.navigation.navigate('QuizView', { entryId: deck })}>
                    <Text style={[styles.submitBtnText, { color: white }]}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: white,
    },
    item: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 20,
        margin: 20,
        height: 200,
        width: 400,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        }
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

export default connect(mapStateToProps)(DeckView)

