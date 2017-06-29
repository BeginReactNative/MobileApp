import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import getData from '../../api/apiExcercies';
import {ABC} from '../../components/ABC';
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
            <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                    <TouchableOpacity onPress={this.startGame.bind(this)}>
                    <Text>STart</Text>
                    </TouchableOpacity>
                    <ABC />
            </View>
        );
    }
}

export default Choose;