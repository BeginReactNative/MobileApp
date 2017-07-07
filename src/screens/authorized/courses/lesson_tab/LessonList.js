import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import CardLesson from '../../../../components/CardLesson';
class LessonList extends Component {
    _renderItem = ({ item }) => (

        <CardLesson
            name={item.name}
            childrenIds={item.childrentIds}
            description={item.description}
            lastUpdate={item.lastUpdate}
            navigation={this.props.navigation}
            index={item.id}
            childrentType={item.childrentType}
        />
    );
    render() {

        return (


            <View style={{ flex: 1 }}>
                {
                    this.props.isFetching && <Text>Loading</Text>
                }
                <FlatList
                    data={this.props.childTopics}
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
        childTopics: state.childTopicById.data,
        isFetching: state.childTopicById.isFetching
    }
}
export default connect(mapStateToProps)(LessonList);

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#f4f7f9',
        paddingTop: 30
    },
}