import React, { Component } from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
class LessonDetail extends Component {
   
    render() {
        return (
                <View style={{flex:1, justifyContent: 'center',alignItems: 'center'}}>
                    <Text>LessonDetail</Text>
                      <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.goBack()}}>
                                <Text>BACK</Text>
                            </TouchableOpacity>
                           
                       </View>
                </View>
        );
    }
}
const styles = {
        buttonContainer: {
         alignItems: 'center',
         justifyContent: 'center',
         height: 50,
         marginLeft: 20,
         marginRight: 20,
         marginTop: 5,
         marginBottom: 5,
         borderRadius: 10,
  
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
export default LessonDetail;