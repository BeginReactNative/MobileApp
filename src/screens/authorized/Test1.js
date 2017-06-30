import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet, ScrollView } from 'react-native';
import getData from '../../api/apiExcercies';
import Bar from 'react-native-bar-collapsible';
import Card from '../../components/CardPopular';
import Swiper from '../../libs/index';
class Choose extends Component {
 constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        getData()
        .then((res) => {
        
          this.setState({
              data: res,
              
          })
          
        })
    }
        startGame() {
        getData()
        .then((res) => {
            this.props.navigation.navigate('Game',{
                data: res,
                questionsCount: res.length,
                navigation: this.props.navigation
               
            })
          this.setState({
              data: res,
              
          })
        
        })
    }
    render() {
        return (
          <Swiper style={styles.wrapper}
        
          
           ref={(swiper) => {this.swiper = swiper;}}
           renderPagination={(index, total, context) => {
                        items = [];
                        for (let i = 0; i < total; i++) {
                            items.push(
                                <TouchableOpacity key={i} onPress={() => {
                                    console.log("touch" + i);
                                     this.swiper.scrollBy(i);

                                }}>
                                <View key={i} style={{
                                        width: 50, height: 50, borderRadius: 25,borderWidth:1, margin: 20, justifyContent: 'center', alignItems: 'center'
                                    }}>
                                 <Text key={i}>{i}</Text>
                                </View>
                                   
                                </TouchableOpacity>
                            )
                        }
                        return (
                            
                            <View style={{
                                position: 'absolute',
                                bottom: 30,
                                right: 10,
                                flexDirection: 'row'
                            }}>
                            <ScrollView horizontal>
                                {items}
                                </ScrollView>
                            </View>
                            

                        )
                    }} 
           loop={false}
          >
          {
              this.state.data.map((game, i) => {
                  return (
                      
                        <View key={i}>
                            <Card />
                            </View>
                     
                             
                  )  
              })
          }
      </Swiper>
                    
                  
                    
        
        );
    }
}
const Circle = (props) => {
   return(
       <TouchableOpacity >
        <View style={{width: 50, height: 50, borderRadius: 25,borderWidth:1, margin: 20,borderColor:props.borDer}}>
       
        </View>
         </TouchableOpacity>
   )
}
var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
export default Choose;
/**
 *   <TouchableOpacity onPress={this.startGame.bind(this)}>
                    <Text>STart</Text>
                    </TouchableOpacity>
 */