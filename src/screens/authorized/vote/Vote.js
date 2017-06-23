import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


class Vote extends Component {
    render() {
          console.log('Navigation',this.props.navigation)
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>Vote Screen</Text>
                </TouchableOpacity>
                
            </View>            
        );
    }
}

export default Vote;