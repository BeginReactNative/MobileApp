
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchTopicsById } from '../../../../redux/actions/topicID';
import { fetchChildTopicsById } from '../../../../redux/actions/childTopicById';
import CardLesson from '../../../../components/CardLesson';



class Lesson extends Component {
    constructor(props) {
        super(props);
        url = `http://api-dot-hola-edu.appspot.com/api?action=getTopics&ids=[${this.props.course.lessonIds}]`
        this.state = {
            dataSource: [],
            urlLesson: ''
        }
    }
    componentWillMount() {
        this.props.getTopics(`http://api-dot-hola-edu.appspot.com/api?action=getTopics&ids=[${this.props.course.lessonIds}]`)
    }
      _renderItem = ({ item }) => (

                <CardLesson 
                    name={item.name}
                    childrenIds = {item.childrentIds}
                    description={item.description}
                    lastUpdate={item.lastUpdate}
                    navigation={this.props.navigation}
                    index={item.id}
                    childrentType={item.childrentType}
                />
        );
    render() {
        
        console.log('Lesson Props', this.props);
      
        return (
            <View style={{ flex: 1 }}>
                {
                    this.props.isFetching && <Text>Loading</Text>
                }
                <FlatList
                    data={this.props.topics}
                    extraData={this.state}
                    keyExtractor={item => item.id}
                    renderItem={this._renderItem}
                />
                <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.goBack()}}>
                                <Text>BACK</Text>
                            </TouchableOpacity>
                           
                       </View>
            </View>


        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f7f9',
        paddingTop: 30
    },
        buttonContainer: {
         alignItems: 'center',
         justifyContent: 'space-around',
         height: 50,
         marginLeft: 20,
         marginRight: 20,
         marginTop: 5,
         marginBottom: 5,
         borderRadius: 10,
         flexDirection: 'row'
     },
     button: {
         backgroundColor: 'aqua',
         width: 140,
         height: 40,
         borderRadius: 10,
         justifyContent: 'center',
         alignItems: 'center'
     }
});
const mapStateToProps = (state) => {
    return {
        topics: state.topicById.data,
        course: state.courseById.data[0],
        isFetching: state.topicById.isFetching,
        childTopics: state.childTopicById.data,
        cards: state.cardById.data
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getTopics: (url) => {
            dispatch(fetchTopicsById(url))
        },
        getchildTopic: (url1) => {
            dispatch(fetchChildTopicsById(url1))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Lesson);

