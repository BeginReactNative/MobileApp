import React, { Component } from 'react';
import { View, Text,TouchableOpacity,ScrollView, Animated } from 'react-native';
import {connect} from 'react-redux';
import {fetchCoursesById} from '../../../../redux/actions/courseByID';
import Header from '../../../../components/Header';
import CardItem from '../../../../components/CardJoined';
class Joined extends Component {
    constructor(props) {
        super(props);
        url=`http://api-dot-hola-edu.appspot.com/api?action=getRandomCourses`
    
    }
    componentWillMount() {
       
    }
    render() {
        const {courses} = this.props;
        return (
            <View style={{flex: 1,backgroundColor: '#D1D1D1'}}>
            <Header 
                 openMenu={() => {}}
                 title={'LoxoToeic'}
                />
                  {
                   courses.isFetching && <Text>Loading</Text>
                }
                    <ScrollView>
                     {courses.data.map((course, i) =>
                        <CardItem key={i}
                            avatar={course.avatar}
                            createDate={course.createDate}
                            shortDescription={course.shortDescription}
                            name={course.name}
                            ownerName={course.ownerName}
                            time={1000 * i}
                            navigation={this.props.navigation.navigate('SourceSCR')}
                        />
                    )}
                    </ScrollView>
            </View>            
        );
    }
}
const mapStateToProps = (state) => {
    return {
        courses: state.dataReducer
    }
}

export default connect(mapStateToProps)(Joined);
/**
 * <TouchableOpacity onPress={() => this.props.navigation.navigate('CourseSCR')}>
                <Text> Joined Screen</Text>
                </TouchableOpacity>
 */