import React, { Component } from 'react';
import { View,Text,TouchableOpacity,Dimensions } from 'react-native';
import {Button} from 'native-base';

class Games extends Component {
    constructor(props){
        super(props)
    }
    render() {
        
        return (
        <View style={styles.container}>
            <View style={styles.question}>
                
                <Text>{`Question ${this.props.index}`}</Text>
                <Text>{this.props.question}</Text>
            </View>
            {
                this.props.answers.map((answer,i) => {
                    return (                        
                        <View style={styles.answer} >
                            <Text>{answer.answer}</Text>
               
                         </View>
                    )
                })
            }
            
        </View>    
        );
    }
}
const {width} =Dimensions.get('window')
const styles = {
    container: {
        justifyContent: 'space-between' 
    },
    question: {
        margin: 10,
        marginTop: 30,
        maxWidth: width
    },
    answer: {
        margin: 10,
        
        padding: 10,
       
    },
    time: {
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-between'
    }
}
export default Games;

