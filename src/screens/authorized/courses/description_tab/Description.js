import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../../../../components/Header';

class Description extends Component {
    render() {
          console.log('Navigation',this.props.navigation)
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('JoinSCR')}>
                    <Text>Goto Join Screen</Text>
                </TouchableOpacity>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('JoinSCR')}>
                    <Text>Goto Vote Screen</Text>
                </TouchableOpacity>
                 <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
                
            </View>            
        );
    }
}

export default Description;