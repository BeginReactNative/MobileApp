import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Swiper from '../libs/Swiper';
import GameView from '../components/Games';
class Game extends Component {
    componentWillMount() {
        StatusBar.setHidden(true)
    }
     constructor(props) {
        super(props);
        this.state = {
            start: 0,
            score: 0
        }
    }
    render() {
       
        return (
            <Swiper
            paginationDotColor={'#fff'} 
            paginationActiveDotColor={'#C5C5C5'}
            showPaginationBelow={true}
            style={{backgroundColor:'#009688'}}
            smoothTransition
            loop
            
            >  
            {
                this.props.navigation.state.params.data.map((exp,i) => {
                    return <View key={i}>
                                <GameView 
                                    index={exp.id}
                                    question={exp.question}
                                    answers={exp.answers}
                                    correct={exp.correct}
                                    navigation={() => this.props.navigation.navigate('FinishSCR')}
                                />
                            </View>
                })
            }
                        
                        
                      
            </Swiper>
        );
    }
}

export default Game;
