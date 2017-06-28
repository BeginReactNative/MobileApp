import React, { Component } from 'react';
import {View, Text,StyleSheet,
        Dimensions, Image,TouchableOpacity,
        ScrollView
} from 'react-native';
import {Icon,Button} from 'native-base';
import Header from '../../../../components/Header';

class Description extends Component {
    render() {
          console.log('Navigation',this.props.navigation)
        return(
            <View style={styles.container}>
                    <Image source={{uri: 'https://blog.jscrambler.com/content/images/2016/12/react_native_banner-min.png'}}
                           style={{width: width - 50, height: 150,margin:20}}
                       />
                <View style={styles.infoStyle}>
                    <View style={styles.infoText}>
                        <Text style={[...styles.textStyle,{fontWeight: 'bold' }]}>{this.props.name}</Text>
                        <Text style={[...styles.textStyle,{color: '#696969' }]}>{this.props.shortDes}</Text>
                        <Text style={[...styles.textStyle,{fontWeight: 'bold' }]}>Create by {this.props.user}</Text>
                    </View>
                  
                    <View style={styles.rateView}>
                        <Icon name='star' size={20}/>
                        <Icon name='star' />
                        <Icon name='star' />
                        <Icon name='star' />
                        <Icon name='star'/>
                        <View style={{width: 150}}/>
                        <Button light><Text>Vote</Text></Button>
                    </View>
                    <Button 
                        primary style={{marginLeft: (width / 2) - 40}}
                        onPress={() => {this.props.navigation.navigate('JoinSCR')}}
                    >
                    <Text>Join</Text>
                    </Button>
                    
                      
                         <Text>{this.props.Description}</Text>
                      
                        
                    
                    
                </View>
            </View>      
        );
    }
}
const {height,width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
    flex            : 1,
    backgroundColor : '#f4f7f9',        
    },
   
    textStyle : {
        fontSize: 15,
        margin: 5,
        
       
    },
    infoStyle: {
        height: height * 0.3,
        padding: 15,
        justifyContent: 'space-between',
        
    },
    rateView: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center'
    },
    infoText: {
    justifyContent: 'space-between',
    height: 70
    }

})
export default Description;

/**
 * Navigate 
 *   <TouchableOpacity onPress={() => this.props.navigation.navigate('JoinSCR')}>
                    <Text>Goto Join Screen</Text>
                </TouchableOpacity>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('JoinSCR')}>
                    <Text>Goto Vote Screen</Text>
                </TouchableOpacity>
                 <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
 */