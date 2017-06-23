import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import Header from '../../../../components/Header';
class Popular extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header 
                openMenu={() => this.props.navigation.navigate('DrawerOpen')}
                title={'LoxoToeic'}
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CourseSCR')}>
                <Text> Popular Screen</Text>
                </TouchableOpacity>
            </View>            
        );
    }
}

export default Popular;