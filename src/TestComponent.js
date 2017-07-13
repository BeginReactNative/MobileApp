import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions,Button,StyleSheet } from 'react-native';
import Display from 'react-native-display';
const { width, height } = Dimensions.get('window')
//TestComponent

//ABC
class Home extends Component {
      constructor(props) {
        super(props);
        this.state = { enable: false };
    }
    toggleDisplay() {
        let toggle = !this.state.enable;
        this.setState({ enable: toggle });
    }
    render() {
        return (
            <View>
                <View style={styles.button}>
                    <Button
                        onPress={this.toggleDisplay.bind(this)}
                        title="Toggle display"
                        color="#34495e"
                        accessibilityLabel="Toggle display for show/hide circles"
                    />
                </View>
                <View style={styles.center}>
                  
                    <Display
                        enable={this.state.enable}
                        enterDuration={500}
                        exitDuration={250}
                        exit="fadeOutDown"
                        enter="fadeInUp"
                    >
                        <View style={[styles.circle, { backgroundColor: '#9b59b6' }]} />
                    </Display>
                  
                </View>
            </View>
        );
    }
}
const styles = {
  button: {
    padding: 10,
    margin: 15,
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    
    height: 300,
    width: width - 20,
    margin: 15
  },
}
export default Home;