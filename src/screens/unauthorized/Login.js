import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

class Login extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignInSCR')}>
                <Text> Login Screen</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Authorized')}>
                <Text> Home Screen</Text>
                </TouchableOpacity>
            </View>            
        );
    }
}

export default Login;