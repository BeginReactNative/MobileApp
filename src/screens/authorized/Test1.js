import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    Dimensions,
    AppRegistry,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import Swiper from './game/swiper';
const {width} = Dimensions.get('window')

const styles = {
    wrapper: {
        backgroundColor:'#009688'
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
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
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width,
        flex: 1
    },
    textDot: {
        borderRadius: 25, borderColor: 'gray', borderWidth: 0.5,
        backgroundColor: 'white', margin: 10, width: 50, height: 50,
        justifyContent: 'center', alignItems: 'center'
    },
    action: {
        borderRadius: 25, borderColor: 'blue', borderWidth: 0.5,
        backgroundColor: 'white', margin: 10, width: 50, height: 50,
        justifyContent: 'center', alignItems: 'center'
    }
};

export default class swiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Bye',
            indexDemo: 0,
        }

    }



    render() {
        itemList = [];
        for (let i = 0; i < 22; i++) {
            itemList.push(i);
        }
        return (
            <Swiper style={styles.wrapper}
                    ref={(c) => {
                        this.swiperRef = c
                    }}
                    renderPagination={(index, total, context) => renderPagination(index, total, context)}
                    onMomentumScrollEnd={(index, total, context) => {

                        test.scrollTo({x: (total.index * 70), y: 0, animated: false});

                      
                    }
                    }
                    paginationStyle={{
                        bottom: -23, left: null, right: 10
                    }} loop={false}
            >
                {
                    itemList.map((item, i) => {
                        return(<View key={i} style={{backgroundColor:'red',flex:1, padding: 20}}>
                            <RenderItemView
                                nextPage={() => {this.swiperRef.scrollBy(this.swiperRef.state.index+1)}}
                                text= {i + 1}/>
                        </View>)
                    })
                }
            </Swiper>
        )
    }
}
//redner ra View Bottom
const renderPagination = (index, total, context) => {
    items = [];
    for (let i = 0; i < total; i++) {
        items.push(
            <TouchableOpacity key={i} onPress={() => {
                context.scrollBy(i);
                this.test.scrollTo({x: (i * 70), y: 0, animated: false});
            }}>
                <View style={[(i === index) ? styles.action : styles.textDot]}>
                    <Text style={{textAlign: 'center', color: 'orange', fontSize: 20}}>
                        {i + 1}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{
            position: 'absolute',
            bottom: 20,
            flexDirection: 'row',
        }}>
            <ScrollView horizontal style={{flex: 1, backgroundColor: 'transparent'}} ref={(c) => this.test = c}
                        showsHorizontalScrollIndicator={false}>
                {items}
            </ScrollView>
        </View>
    )
};

//render ra Content View
class RenderItemView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={{color:'black',fontSize:20}}>{this.props.text}</Text>
                <TouchableOpacity  style={{margin:10}} onPress={this.props.nextPage.bind(this)}>
                    <Text style={{fontSize:50,alignSelf:'center'}}> A </Text>

                </TouchableOpacity>
                <TouchableOpacity  style={{margin:10}}>
                    <Text style={{fontSize:50,alignSelf:'center'}}> B </Text>

                </TouchableOpacity>
                <TouchableOpacity  style={{margin:10}}>
                    <Text style={{fontSize:50,alignSelf:'center'}}> C </Text>

                </TouchableOpacity>
            </View>
        );
    }
}


AppRegistry.registerComponent('redux4', () => swiper);


