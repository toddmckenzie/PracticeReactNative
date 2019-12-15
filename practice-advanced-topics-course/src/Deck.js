import React from 'react';
import { View, Animated, Text } from 'react-native';

const Deck = (props) => {
    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    )
}

export default Deck;