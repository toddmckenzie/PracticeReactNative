import React from 'react';
import { View, Animated, Text, PanResponder, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;   //gets the width of the device one is using.

class Deck extends React.Component {
    constructor(props){
        super(props);
        
        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy })
            },
            onPanResponderRelease: (event, gesture) => {
                this.resetPosition(gesture.vx, gesture.vy);
            }
        })

        this.state = { panResponder, position };
        
      

    }

    resetPosition = (x1, y1) => { //resets to original position on release.
        Animated.spring(this.state.position, {
            toValue: { x: x1, y: y1}
        }).start();
    }

    getCardStyle = () => {
        const { position } = this.state;
        const rotate = position.x.interpolate({ //rotates the card//
            inputRange:  [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange: ['-120deg', '0deg', '120deg']
        })
        
        return {
            ...position.getLayout(),
                transform: [{ rotate }]
            }
        
    }
    

    render() {
    return (
        <Animated.View style={this.getCardStyle()} {...this.state.panResponder.panHandlers}>
            <Card
            title={this.props.item.text}
            image={{ uri: this.props.item.uri }}
            >
            <Text style={{ marginBottom: 10 }}> customizations </Text>
            <Button
                icon={{ name: 'code' }}z
                backgroundColor="#03A9F4"
                title="View Now!"
            />
            </Card>
        </Animated.View>
    )
    }
}

export default Deck;