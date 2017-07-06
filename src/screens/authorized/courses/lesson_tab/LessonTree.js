import React, { Component } from 'react';
import { View, Text, StyleSheet,StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { fetchTopicsById } from '../../../../redux/actions/topicID';
import Controlled from './DataTree1';
import Uncontrolled from './DataTree';



class TestTree extends Component {
   
    render() {
         
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <Uncontrolled />
                <View style={{ padding: 20 }} />
                <Controlled />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF',
        padding: 20,
    },
});
export default TestTree;