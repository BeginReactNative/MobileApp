import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../../../components/Header';
import CardItem from '../../../../components/CardPopular';
import Carousel from 'react-native-snap-carousel';
const { width, height } = Dimensions.get('window')
class Popular extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    openMenu={() => this.props.navigation.navigate('DrawerOpen')}
                    title={'LoxoToeic'}
                />
                <ScrollView>
                    <Text>Technology</Text>
               
                    <Text>English</Text>
                    <Carousel
                        ref={(carousel) => { this._carousel = carousel; }}
                        sliderWidth={width}
                        autoplay
                        itemWidth={width - 20}

                    >
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                    </Carousel>
                    <Text>Healthy!</Text>
                    <Carousel
                        ref={(carousel) => { this._carousel = carousel; }}
                        sliderWidth={width}
                        autoplay

                        itemWidth={width - 20}

                    >
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                    </Carousel>
                    <Text>Sports!</Text>
                    <Carousel
                        ref={(carousel) => { this._carousel = carousel; }}
                        sliderWidth={width}
                        autoplay

                        itemWidth={width - 20}

                    >
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                    </Carousel>

                </ScrollView>
            </View>
        );
    }
}

export default connect()(Popular);
/**
 * <TouchableOpacity onPress={() => this.props.navigation.navigate('CourseSCR')}>
                <Text> Popular Screen</Text>
                </TouchableOpacity>
 */