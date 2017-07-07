import React, { Component } from 'react';
import { View, Text,Dimensions,WebView,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {fetchChildTopicsById} from '../redux/actions/childTopicById';
import {fetchCardById} from '../redux/actions/cardById';

class CardLesson extends Component {
    componentDidMount() {
        
    }
    checkChildType() {
        if(this.props.childrentType === 1) {
            this.props.getChildTopic(`http://api-dot-hola-edu.appspot.com/api?action=getTopics&ids=[${this.props.childrenIds}]`),
            this.props.navigation.navigate('LessonListSCR')
            alert('Ben trong la topic')
        }
        else {
           this.props.navigation.navigate('ExerciseSCR')
           this.props.getCards(`http://api-dot-hola-edu.appspot.com/api?action=getCards&ids=[${this.props.childrenIds}]`)
            alert('Ben trong deo phai topic')
        }
    }
    render() {
        console.log('Card Lesson',this.props.name,this.props.childTopic,this.props.childrentType)
        return (
            <TouchableOpacity onPress={() => {this.checkChildType()}}>
            <View style={styles.container}>
                <View style={styles.headerTitle}>
                    <Text style={styles.textHeader}>{this.props.name}</Text>
                </View>
                <View style={styles.description}>
                    <WebView source={{html: this.props.description}} /> 
                </View>
                <View style={styles.action}>
                    <Text>{this.props.childrenIds.length} lessons</Text>
                    <Text>Last Update: 25/6/2017</Text>
                </View>
            </View>    
            </TouchableOpacity>    
        );
    }
}
const mapStateToProps = (state) => {
    return {
        childTopic: state.childTopicById,
        cards: state.cardById.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getChildTopic: (url) => {
            dispatch(fetchChildTopicsById(url))
        },
        getCards: (url) => {
            dispatch(fetchCardById(url))
        }
    }
}

const {height} = Dimensions.get('window')
const styles = {
    container: {
        height: height * 0.35,
        margin: 10,
        borderWidth:1,
        borderRadius: 10,
          shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
      
        shadowRadius: 2,
        shadowOpacity: 1.0
    },
    headerTitle: {
        flex:1,
       
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        flex:2,
       
        padding: 10
    },
    action: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between'
    },
    textHeader: {
        fontSize: 22,
        fontWeight: 'bold'
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CardLesson);
