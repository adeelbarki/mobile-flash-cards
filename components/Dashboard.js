import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import { white, purple } from '../utils/colors'

class Dashboard extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView')}>
                    <Text style={[styles.item, {fontSize: 20}]}>DeckView 1</Text>
                    <Text style={[styles.item, {fontSize: 20}]}>DeckView 2</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        }
    },
})

export default Dashboard