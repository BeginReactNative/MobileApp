import React, { Component } from 'react';
import { View,Text,TouchableOpacity,Dimensions } from 'react-native';
import {Button} from 'native-base';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';

class Games extends Component {
    constructor(props){
        super(props);
        this.state ={
            text: '',
            start:0,
            score: 0
        }
         this.onSelect = this.onSelect.bind(this)
    }
    reset() {
        this.setState({
            start: 0,
            score:0
        })
    }
    handleAnswer(answer) {
       
        if(this.state.start == 9) {
           

            this.props.navigation.navigate('FinishSCR',
            {
                    score: this.state.score,
                    questionsCount: this.props.navigation.state.params.questionsCount,
            });

            this._reset();
        }

        if(this.props.correct == answer) {
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            start: this.state.start + 1
        });
    }
    onSelect(index, value) {
        this.setState({
            text: `Selected index: ${index} , value: ${value}`,
        
        });
        
    }
    render() {
        
        return (
        <View style={styles.container}>
            <View style={styles.question}>
                <Text>{`Question ${this.props.index}`}</Text>
                <Text>{this.props.question}</Text>
            </View>
            <View style={styles.answerContainer}>
                <View style={styles.choicesTitle}>
                        <RadioGroup
                            size={24}
                            thickness={2}
                            color='#9575b2'
                            highlightColor='#ccc8b9'
                            onSelect={(index, value) => this.onSelect(index, value)}
                        >
                            {
                                this.props.answers.map((answer, i) => (
                                    <RadioButton
                                        value={i}
                                    >
                                        <Text>{answer.answer}</Text>
                                    </RadioButton>
                                ))
                            }

                            

                         
                        </RadioGroup>    
                </View>
            </View>
           
            
        </View>    
        );
    }
}
const {width} =Dimensions.get('window')
const styles = {
    container: {
        justifyContent: 'space-between' ,
        
        
    },
    choicesTitle: {
        marginLeft: 20,
      
    },
    choices: {
        flex: 4,
        paddingLeft: 20,
        
        justifyContent:'space-between',
        marginBottom: 20
    },
    answerContainer: {
        maxWidth: width,
        flexDirection: 'row',
       
      
    },
    question: {
        margin: 10,
        marginTop: 30,
        maxWidth: width,
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomWidth:1,
        
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

