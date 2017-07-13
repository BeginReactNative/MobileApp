import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableHighlight } from 'react-native';
class Game extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            score: 0
        }
    }
    _reset() {
        this.setState({
            start:0,
            score:0
        })
    }
    _btnStyle(btn) {
        var style = {
            justifyContent: 'center',
            flex: 1,
        };

        if(btn === 0) {
            style.backgroundColor = '#4daf51';
        } else if(btn === 1) {
            style.backgroundColor = '#f9845b';
        } else if(btn === 2) {
            style.backgroundColor = '#9e4d83';
        } else {
            style.backgroundColor = '#3079ab';
        }

        return style;
    }
//  === (this.state.start + 1)
    _handleAnswer(answer) {
        
        if(this.state.start == 9) {
           

            this.props.navigation.navigate('FinishSCR',
            {
                    score: this.state.score,
                    questionsCount: this.props.navigation.state.params.questionsCount,
            });

            this._reset();
        }

        if(this.props.navigation.state.params.data[this.state.start].correct == answer) {
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            start: this.state.start + 1
        });
    }
    render() {
      
      return(
          <View style={{ flex: 1 }}>
              <View style={{ height: 300, justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{ flex: 2, justifyContent: 'center',margin: 10}}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Chon từ thích hợp còn trống cho các câu sau: </Text>
                  </View>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>Câu {this.state.start + 1}</Text>
                <View style={{ flex: 6, padding: 10 }}>
                  <Text style={{fontSize: 16}}>{this.props.navigation.state.params.data[this.state.start].question}</Text>
              </View>
              </View>
            {
                    
                        this.props.navigation.state.params.data[this.state.start].answers.map((answer, i) => {
                            return <View key={i} style={{flex:1}}>
                                <TouchableHighlight
                                   
                                    style={this._btnStyle(i)}
                                    onPress={this._handleAnswer.bind(this, answer.id,) }
                                    underlayColor="#333"
                                >
                                    <Text style={styles.buttonText}>{answer.answer}</Text>
                                </TouchableHighlight>

                            </View>
                        })
                    
                }
            </View>
      );
  
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 300
    },
    buttonText: {
        color: '#fff',
        alignSelf: 'center',
        fontFamily: 'Helvetica',
        fontSize: 16
    }
});

export default Game;