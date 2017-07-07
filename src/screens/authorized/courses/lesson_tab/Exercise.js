import React, { Component } from 'react';
import { View,Text,WebView,Dimensions,FlatList } from 'react-native';
import {connect} from 'react-redux';
import Swiper from 'react-native-swiper';
import Carousel from 'react-native-snap-carousel';
import CardExercise from '../../../../components/CardExercise';
const {width, height} = Dimensions.get('window')
class Exercise extends Component {
     _renderItem = ({ item }) => (
            <CardExercise 
                frontText={item.frontText}
                multiChoices={item.multiChoices}
                backText={item.backText}
                index={item.index}
            />
    );
    render() {
        return (
            <View style={styles.container}>
            {
                this.props.isFetching && <Text>Loading...!</Text>
            }
            <Carousel
             ref={(carousel) => { this._carousel = carousel; }}
              sliderWidth={width - 10}
              itemWidth={width}
              slideStyle={{ width: width }}
              inactiveSlideOpacity={1}
             inactiveSlideScale={1}
              >
               {
                   this.props.cards.map((card,i) =>(
                       
                        <View style={{ flex:1,borderWidth:1, borderRadius: 5,width: width}} key={i}>
                        <Text>Cau {i +1 }</Text>
                        <WebView style={styles.web} 
                            source={{html: card.frontText}}
                        >
                        </WebView>
                       <View style={{height: 400}}>
                            <FlatList
                                    data={card.childCards}
                                    extraData={this.state}
                                    keyExtractor={item => item.id}
                                    renderItem={this._renderItem}
                            />
                        
                       </View>
                    
                       </View>
                       
                   ))
               }
            </Carousel>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cards: state.cardById.data,
        isFetching: state.cardById.isFetching,
        
    }
}
export default connect(mapStateToProps)(Exercise);
 const styles ={
     container: {
         flex:1
     },
     web: {
         margin: 10,
         borderRadius:10,
         
         backgroundColor: '#f4f7f9'

     }
 }