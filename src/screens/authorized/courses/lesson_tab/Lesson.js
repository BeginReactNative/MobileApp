import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Lessons extends Component {
    render() {
        return (
            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                <Text>Lesson Screen</Text>
            </View>            
        );
    }
}

export default Lessons;