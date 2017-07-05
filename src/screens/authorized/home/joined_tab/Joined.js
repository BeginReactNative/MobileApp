import React, { Component } from 'react';
import { View, Text,TouchableOpacity,ScrollView, Animated } from 'react-native';
import {connect} from 'react-redux';
import Header from '../../../../components/Header';
import CardItem from '../../../../components/CardJoined';
class Joined extends Component {
    
 
    render() {
   
        return (
            <View style={{flex: 1,backgroundColor: '#D1D1D1'}}>
            <Header 
                 openMenu={() => this.props.navigation.navigate('Course')}
                 title={'LoxoToeic'}
                />
                  {
                    this.props.courses.isFetching && <Text>Loading</Text>
                }
                    <ScrollView>
                     {this.props.courses.data.map((course, i) =>
                        <CardItem key={i}
                            avatar={course.avatar}
                            createDate={course.createDate}
                            shortDescription={course.shortDescription}
                            name={course.name}
                            ownerName={course.ownerName}
                            time={1000 * i}
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