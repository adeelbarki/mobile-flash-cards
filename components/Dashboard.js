
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Platform, StyleSheet, ScrollView } from 'react-native'
import { getInitialData, getDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { white, purple, gray } from '../utils/colors'

class Dashboard extends Component {

    componentDidMount() {
        getDecks()
            .then(decks => this.props.receiveAllDecks(decks))
    }


    render() {
        const { decks }=  this.props
        return (
            <View style={styles.container}>
                <ScrollView>
                    {Object.keys(decks).map((key) => {
                        const { title, questions } = decks[key]
                        return (
                            <View key={key}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView', {entryId:key})}>
                                    <Text style={[styles.item, { fontSize: 40 }]}>{title}</Text>
                                    <Text style={[styles.item, { fontSize: 18, color: gray }]}>{questions.length} cards</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: white,
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
    },
    item: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
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
})


function mapStateToProps(decks) {
    return {
        decks
    }
}

function mapDispatchToProps( dispatch ) {
    return {
        receiveAllDecks: (decks) => dispatch(receiveDecks(decks))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)