import React, { Component } from 'react';
import { View, Text,StyleSheet, TouchableHighlight } from 'react-native';
import getData from '../../../api/apiExcercies';
class Choose extends Component {
     static navigationOptions = {
        title: 'Welcome',
    };
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    startGame() {
        getData()
        .then((res) => {
            this.props.navigation.navigate('GameSRC',{
                data: res,
                questionsCount: res.length,
                navigation: this.props.navigation
               
            })
            console.log('GETDATA',res)
        })
    }
    render() {
        return (
              <View style={styles.container}>
                <Text style={styles.heading}>Choose Level</Text>
                <TouchableHighlight
                    
                    style={styles.button}
                    onPress={this.startGame.bind(this)}
                >
                    <Text style={styles.buttonText}>Easy</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    
                    style={styles.button}
                    onPress={this.startGame.bind(this)}
                >
                    <Text style={styles.buttonText}>Normal</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  
                    style={styles.button}
                    onPress={this.startGame.bind(this)}
                >
                    <Text style={styles.buttonText}>Hard</Text>
                </TouchableHighlight>
            </View>  
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e59a13',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 90
    },
    heading: {
        color: '#fff',
        fontSize: 20,
       
        fontFamily: 'Helvetica'
    },
    button: {
        height: 60,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10
    },
    buttonText: {
        color: '#e59a13',
        fontSize: 16,
        fontFamily: 'Helvetica'
    }
});
export default Choose;
/**
 *       
 */