import React, { Component } from 'react';
import { View,Text,WebView } from 'react-native';

class Home extends Component {
   
    render() {
        var value = `<p>Hello world <b>world</b> <i>foo</i> bar hahh</p>`;
        return (
            <View style={{flex:1}}>
            <WebView html={value} />
            </View>
        );
    }
}

export default Home;