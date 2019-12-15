import React from 'react';
import { View, Animated, Text } from 'react-native';
import { Card, Button } from 'react-native-elements'

const Deck = (props) => {
    return (
        <Card
        title={props.item.text}
        image={{ uri: props.item.uri }}

        >
        <Text style={{ marginBottom: 10 }}> Just more customizations </Text>
        <Button
            icon={{ name: 'code' }}
            backgroundColor="#03A9F4"
            title="View Now!"
        />
        </Card>
    )
}

export default Deck;