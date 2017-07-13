import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppIntro from 'react-native-app-intro';
import IntroSCR from '../../components/IntroScreen';
class Login extends Component {
    render() {
        return (
            <AppIntro 
                onSkipBtnClick={(index) => this.props.navigation.navigate('Authorized')}
                onDoneBtnClick={(index) => this.props.navigation.navigate('Authorized')}
            >
              
                    <IntroSCR 
                        image={'https://hola-edu.appspot.com/resources/images/home/banner1.jpg'}
                        title={'Kiểm tra đầu vào'}
                        desc1={'Take the Diagnotic Test -- NOW!'}
                        desc2={'What you need!'}
                    />
                    <IntroSCR image={'https://hola-edu.appspot.com/resources/images/home/banner2.png'}/>
            </AppIntro>
        );
    }
}
const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        padding: 15,
    },
   
});
export default Login;


    // <TouchableOpacity onPress={() => this.props.navigation.navigate('Authorized')}>
    //             <Text> Home Screen</Text>
    //             </TouchableOpacity>