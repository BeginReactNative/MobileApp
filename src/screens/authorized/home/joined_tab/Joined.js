import React, { Component } from 'react';
import { View, Text,TouchableOpacity,ScrollView } from 'react-native';
import Header from '../../../../components/Header';
import CardItem from '../../../../components/CardPopular';
class Joined extends Component {
    render() {
        return (
            <View style={{flex: 1,backgroundColor: '#D1D1D1'}}>
            <Header 
                 openMenu={() => this.props.navigation.navigate('CourseSCR')}
                 title={'LoxoToeic'}
                />
                 <ScrollView>
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                 </ScrollView>
            </View>            
        );
    }
}

export default Joined;
/**
 * <TouchableOpacity onPress={() => this.props.navigation.navigate('CourseSCR')}>
                <Text> Joined Screen</Text>
                </TouchableOpacity>
 */