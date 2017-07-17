import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import {Icon} from 'native-base';
const { width, height } = Dimensions.get('window')
class IntroSCR extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.img}
                    source={{ uri: this.props.image }}
                    resizeMode='stretch'
                />
                <View level={10}>
                    <Text style={styles.text}>{this.props.title}</Text>
                </View>
                <View level={15}>
                    <Text style={[...styles.text,{fontSize:20}]}>{this.props.desc1}</Text>
                </View>
                <View level={8}>
                    <Text style={[...styles.text,{fontSize:18}]}>{this.props.desc2}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Icon name='md-done-all' size={20} />
                    <Text>A computer with internet connection</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Icon name='md-done-all' size={20} />
                    <Text>1,5 hours, 3 kill</Text>
                </View>
            </View>
        );
    }
}
const styles = {
    container: {
        justifyContent: 'space-around',
        height: height,

        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        padding: 15,
        paddingBottom: 60
    },
    img: {
        alignSelf: 'center',
        height: 250,
        width: 300,
        borderWidth: 1,

    },
     text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
};
export default IntroSCR;
