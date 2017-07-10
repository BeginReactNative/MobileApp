import React, { Component } from 'react';
import { View, Text, FlatList,TouchableOpacity } from 'react-native';
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
                 <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.goBack()}}>
                                <Text>BACK</Text>
                            </TouchableOpacity>
                           
                       </View>
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
}