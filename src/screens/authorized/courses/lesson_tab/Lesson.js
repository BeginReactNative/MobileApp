
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchTopicsById } from '../../../../redux/actions/topicID';
import {fetchChildTopicsById} from '../../../../redux/actions/childTopicById';
import Panel from '../../../../components/CollapsingElements';
import Topic from '../../../../api/apiTopic';
import LessonTree from './LessonTree';

class Lesson extends Component {
    constructor(props) {
        super(props);
        url= `http://api-dot-hola-edu.appspot.com/api?action=getTopics&ids=[${this.props.course.lessonIds}]`
        this.state = {
            dataSource: [],
            urlLesson: ''
        }
    }
    componentWillMount() {
        this.props.getTopics(`http://api-dot-hola-edu.appspot.com/api?action=getTopics&ids=[${this.props.course.lessonIds}]`)
    }
    render() {
        console.log(url)
        console.log('Lesson Props', this.props) 
        return (
            <ScrollView style={styles.container}>
                {
                    this.props.isFetching && <Text>Loading</Text>
                }
                <LessonTree navigation={url}/>
            </ScrollView>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f7f9',
        paddingTop: 30
    },

});
const mapStateToProps = (state) => {
    return {
        topics: state.topicById.data,
        course: state.courseById.data[0],
        isFetching:state.topicById.isFetching,
        childTopics: state.childTopicById.data
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
/**
 *     {
                    this.props.topics.length ? (
                        this.props.topics.map((topic, i) => {
                            return <View key={i} >
                                <Panel title={topic.name}
                                     
                                    topicID={topic.id}
                                    navigation={this.props.navigation}
                                >
                                </Panel>

                            </View>
                        })
                    ) : null
                }
 */
