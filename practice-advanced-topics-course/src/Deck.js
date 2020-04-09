import React from 'react';
import { View, Animated, Text, PanResponder, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-elements'

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
            onPanResponderRelease: () => {}
        })

        this.state = { panResponder, position };
        
      

    }

      getCardStyle = () => {
          const { position } = this.state;
          const rotate = position.x.interpolate({
              inputRange:  [-500, 0, 500],
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