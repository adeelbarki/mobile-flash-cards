import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Dashboard extends Component {
    render() {
        return (
            <View>
                <Text>Dashboard View</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView')}>
                    <Text>DeckView 1</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Dashboard