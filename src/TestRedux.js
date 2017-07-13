import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addNumber, subNumber } from './redux/actions';
import { fetchRandomCourses } from './redux/actions/dataAction';

class Test extends Component {

    componentDidMount() {
        this.props.getData()
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => {this.props.addNumber()}}>
                    <Text>ADD</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.props.subNumber()}}>
                    <Text>SUB</Text>
                </TouchableOpacity>
                <Text>{this.props.numberProps}</Text>
            </View>
        );
    }
}
function mapStateToProps(state) {
 
    return {
        numberProps: state.testReducer.number,
        dataProps: state.dataReducer
    }
}
function mapDispatchToProps(dispatch) {
 
    return {
        addNumber: () => dispatch(addNumber()),
        subNumber: () => dispatch(subNumber()),
        getData: () => dispatch(fetchRandomCourses())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Test);
