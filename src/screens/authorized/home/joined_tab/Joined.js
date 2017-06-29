import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import Header from '../../../../components/Header';
class Joined extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header 
                 openMenu={() => this.props.navigation.navigate('CourseSCR')}
                 title={'LoxoToeic'}
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CourseSCR')}>
                <Text> Joined Screen</Text>
                </TouchableOpacity>
            </View>            
        );
    }
}

export default Joined;