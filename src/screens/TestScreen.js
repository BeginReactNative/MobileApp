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
            paginationDotColor={'#C5C5C5'} 
            paginationActiveDotColor={'#fff'}
            showPaginationBelow={true}
            
            >  
            {
                this.props.navigation.state.params.data.map((exp,i) => {
                    return <View key={i}>
                                <GameView 
                                    index={exp.id}
                                    question={exp.question}
                                    answers={exp.answers}
                                />
                            </View>
                })
            }
                        
                        
                      
            </Swiper>
        );
    }
}

export default Game;
