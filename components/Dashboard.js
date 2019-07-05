
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Platform, StyleSheet, ScrollView, Animated, Easing } from 'react-native'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { white, gray } from '../utils/colors'

class Dashboard extends Component {
    state = {
        size: new Animated.Value(0),
        clicked: ''
    }

    componentDidMount() {
        getDecks()
            .then(decks => this.props.receiveAllDecks(decks))
    }

    handleAnimation = (key) => {
        const size = this.state.size
        this.setState({
            clicked: key
        })
        Animated.timing(
            size,
            {
                toValue: 1,
                duration: 500,
                easing: Easing.linear,
            })
            .start(() => {
                this.props.navigation.navigate('DeckView', { entryId: key })
                size.setValue(0)
            })
            
    }

    render() {
        const { decks } = this.props
        const size = this.state.size
        const textSize = size.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [40, 20, 40]
        })

        return (
            <ScrollView style={styles.container}>
                {Object.keys(decks).map((key) => {
                    const { title, questions } = decks[key]
                    
                    return (
                        <TouchableOpacity key={key} onPress={() => {
                            this.handleAnimation(key)
                        }}
                        >
                            <View style={styles.row}>

                                {this.state.size && this.state.clicked === key
                                ? <Animated.Text style={{ fontSize: textSize }}>{title}</Animated.Text>
                                : <Text style={{ fontSize: 40 }}>{title}</Text>
                                }
                                <Text style={{ fontSize: 18, color: gray, textAlign: 'center' }}>{questions.length} cards</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
                }
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        padding: 10,
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
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 4,
        shadowOpacity: 0.8,

    },
    item: {
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
})


function mapStateToProps(decks) {
    return {
        decks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        receiveAllDecks: (decks) => dispatch(receiveDecks(decks))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)