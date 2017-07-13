import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    View,
    FlatList
} from 'react-native';
import { Icon } from 'native-base';
import Card from '../../../../components/CardCreated';
import { connect } from 'react-redux';
import { fetchCoursesById } from '../../../../redux/actions/dataAction';
import Header from '../../../../components/Header';



// Staless component 


class Created extends Component {

    constructor(props) {
        super(props);
        url = `http://api-dot-hola-edu.appspot.com/api?action=getRandomCourses`
    }
    componentWillMount() {
        this.props.getCourses(url)
    }
    _renderItem = ({ item }) => (
        <Card
            avatar={item.avatar}
            createDate={item.createDate}
            shortDescription={item.shortDescription}
            name={item.name}
            ownerName={item.ownerName}
            navigation={() => { this.props.navigation.navigate('CourseSCR', { courseId: item.id, title:item.name }) }}
        />
    )
    render() {

        return (
            <View style={{ flex: 1 }}>
                <Header
                    openMenu={() => this.props.navigation.navigate('DrawerOpen')}
                    title={'E-Learning'}
                    menu={true}
                    search={true}
                    share={true}
                    notification={true}
                />
                <Text></Text>
                {
                    this.props.courses.isFetching && <Text>Loading</Text>
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
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        justifyContent: 'space-between',
    },
    exampleTitle: {
        fontSize: 28,
        fontFamily: 'Futura-Medium'
    },

});
export const mapStateToProps = (state) => {
    return {
        courses: state.dataReducer
    }
}
export const mapDispatchToProps = (dispatch) => {
    return {
        getCourses: (url) => {
            dispatch(fetchCoursesById(url))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Created);