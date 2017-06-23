import React from 'react';
import { View, Text } from 'react-native';
import RootComponent from '../components/RootComponent';


class TestSCR extends RootComponent {
    constructor(props) {
        super(props);
       
    }
    render() {
        return(
            
            <View style={{flex: 1}}>
            <View style={{width: 200, backgroundColor: 'blue'}}>
                <Text>AAAA</Text>
                </View>
                {
                    super.render()
                
                }
            </View>
            
        )
    }
}
export default TestSCR;
