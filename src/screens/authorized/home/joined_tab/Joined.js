import React, { Component } from 'react';
import { View, Text,TouchableOpacity,ScrollView, Animated } from 'react-native';
import Header from '../../../../components/Header';
import CardItem from '../../../../components/CardJoined';
class Joined extends Component {
    
 
    render() {
       console.log('navigation', this.props)
        return (
            <View style={{flex: 1,backgroundColor: '#D1D1D1'}}>
            <Header 
                 openMenu={() => this.props.navigation.navigate('Course')}
                 title={'LoxoToeic'}
                />
                  
                 <ScrollView>
                    <CardItem time={1000} />
                    <CardItem time={2000} />
                    <CardItem time={3000} />
                    <CardItem time={4000} />
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