import React from 'react';
import { View, Animated, Text, PanResponder } from 'react-native';
import { Card, Button } from 'react-native-elements'


class Deck extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
    return (
        <Card
        // key={this.props.items.id}
        title={this.props.item.text}
        image={{ uri: this.props.item.uri }}
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
}

export default Deck;