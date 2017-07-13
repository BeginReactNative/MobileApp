import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView,FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchCoursesById } from '../../../../redux/actions/courseByID';
import Header from '../../../../components/Header';
import Card from '../../../../components/CardCreated';
class Joined extends Component {
    constructor(props) {
        super(props);
        url = `http://api-dot-hola-edu.appspot.com/api?action=getRandomCourses`

    }
    componentWillMount() {

    }
    _renderItem = ({ item }) => (
        <Card
            avatar={item.avatar}
            createDate={item.createDate}
            shortDescription={item.shortDescription}
            name={item.name}
            ownerName={item.ownerName}
            navigation={() => { this.props.navigation.navigate('CourseSCR', { courseId: item.id }) }}
        />
    )
    render() {
        const { courses } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: '#D1D1D1' }}>
                <Header
                    openMenu={() => { }}
                    title={'LoxoToeic'}
                />
                {
                    courses.isFetching && <Text>Loading</Text>
                }
                <FlatList
                    data={this.props.courses.data}
                    extraData={this.state}
                    keyExtractor={item => item.id}
                    renderItem={this._renderItem}
                />
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