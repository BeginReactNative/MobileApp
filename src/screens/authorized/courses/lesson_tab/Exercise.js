import React, { Component } from 'react';
import { View,Text,WebView,Dimensions,FlatList,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {fetchCardById} from '../../../../redux/actions/cardById';
import Swiper from 'react-native-swiper';
import Carousel from 'react-native-snap-carousel';
import CardExercise from '../../../../components/CardExercise';
import Header from '../../../../components/Header';
const {width, height} = Dimensions.get('window')
class Exercise extends Component {
    constructor(props) {
        super(props);
       this.state = {
           arr : []
       }
    }
     _renderItem = ({ item }) => (
            <CardExercise 
                frontText={item.frontText}
                multiChoices={item.multiChoices}
                backText={item.backText}
                index={item.index}
            />
    );
    fetchFinalCard(value) {
         this.props.getFinalCard(`http://api-dot-hola-edu.appspot.com/api?action=getCards&ids=[${value}]`)
    }
    render() {
        console.log('AAAAA',this.props)
        return (
            <View style={styles.container}>
                 <Header 
                    title={this.props.cards.name}
                    menu={false}
                    search={false}
                    share={false}
                    notification={false}
                />
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
                   this.props.cards.map((card,i) =>{
                        //Get Question and answer for game
                       this.state.arr.push(card.childIds)
                       
                    return(
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
                       <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.goBack()}}>
                                <Text>BACK</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => {[this.props.navigation.navigate('MiniGameSCR'),this.fetchFinalCard(this.state.arr)]}}>
                                <Text>START</Text>
                            </TouchableOpacity>
                       </View>
                       </View>
                    )
               })
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
const mapDispatchToProps = (dispatch) => {
    return {
        getFinalCard: (url) => {
            dispatch(fetchCardById(url))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Exercise);
 const styles ={
     container: {
         flex:1
     },
     web: {
         margin: 10,
         borderRadius:10,
         backgroundColor: '#f4f7f9'

     },
     buttonContainer: {
         alignItems: 'center',
         justifyContent: 'space-around',
         height: 50,
         marginLeft: 20,
         marginRight: 20,
         marginTop: 5,
         marginBottom: 5,
         borderRadius: 10,
         flexDirection: 'row'
     },
     button: {
         backgroundColor: 'aqua',
         width: 140,
         height: 40,
         borderRadius: 10,
         justifyContent: 'center',
         alignItems: 'center'
     }
 }