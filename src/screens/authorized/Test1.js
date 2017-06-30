import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import getData from '../../api/apiExcercies';
import Bar from 'react-native-bar-collapsible';
import Card from '../../components/CardPopular';
class Choose extends Component {
 constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
        startGame() {
        getData()
        .then((res) => {
            this.props.navigation.navigate('Game',{
                data: res,
                questionsCount: res.length,
                navigation: this.props.navigation
               
            })
          
        })
    }
    render() {
        return (
            <View style={{flex: 1}}>
                    <Card />
                  
                    
            </View>
        );
    }
}

export default Choose;
/**
 *   <TouchableOpacity onPress={this.startGame.bind(this)}>
                    <Text>STart</Text>
                    </TouchableOpacity>
 */