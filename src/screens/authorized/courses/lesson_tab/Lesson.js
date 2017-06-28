import React, { Component } from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import Panel from '../../../../components/CollapsingElements';

class Lessons extends Component {
    constructor(props) {
    super(props);
  
    this.state = {
      isLoading: true,
      dataSource:[],
     
    }
  }

  


    render() {
    
        return(
           <View></View>
        )
    }
}

var styles = StyleSheet.create({
  container: {
    flex            : 1,
    backgroundColor : '#f4f7f9',
    paddingTop      : 30
  },
  
});

export default Lessons;