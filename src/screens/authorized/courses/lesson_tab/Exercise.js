import React, { Component } from 'react';
import { View,Text,WebView,Dimensions } from 'react-native';
import {connect} from 'react-redux';
import Swiper from 'react-native-swiper';
import Carousel from 'react-native-snap-carousel';
const {width, height} = Dimensions.get('window')
class Exercise extends Component {
  
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
                        <Text>{i}</Text>
                        <WebView style={styles.web} 
                            source={{html: card.frontText}}
                        >
                        </WebView>
                        <View style={{height: height * 0.6, borderWidth:1}}>
                            <Text>AAA</Text>
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
        isFetching: state.cardById.isFetching
    }
}
export default connect(mapStateToProps)(Exercise);
 const styles ={
     container: {
         flex:1
     },
     web: {
         margin: 10,
        
         borderRadius: 5,
         backgroundColor: '#f4f7f9'

     }
 }