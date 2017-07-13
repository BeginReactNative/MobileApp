import React, { Component } from 'react';
import { View, Text, Dimensions,FlatList,ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../../../components/Header';
import Card from '../../../../components/CardCreated';

const { width, height } = Dimensions.get('window')
class Popular extends Component {
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
        return (
            <View style={{ flex: 1 }}>
                <Header
                    openMenu={() => this.props.navigation.navigate('DrawerOpen')}
                    title={'LoxoToeic'}
                />
                <ScrollView>
                
                <Text>Technology</Text>
                <FlatList
                    horizontal
                    data={this.props.courses.data}
                    extraData={this.state}
                    keyExtractor={item => item.id}
                    renderItem={this._renderItem}
                />
                <Text>English</Text>
                <FlatList
                    horizontal
                    data={this.props.courses.data}
                    extraData={this.state}
                    keyExtractor={item => item.id}
                    renderItem={this._renderItem}
                />
                <Text>Healthy!</Text>
                <FlatList
                    horizontal
                    data={this.props.courses.data}
                    extraData={this.state}
                    keyExtractor={item => item.id}
                    renderItem={this._renderItem}
                />
                <Text>Sports!</Text>
                 <FlatList
                    horizontal
                    data={this.props.courses.data}
                    extraData={this.state}
                    keyExtractor={item => item.id}
                    renderItem={this._renderItem}
                />
                </ScrollView>
            </View>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        courses: state.dataReducer
    }
}
export default connect(mapStateToProps)(Popular);
/**
 * <TouchableOpacity onPress={() => this.props.navigation.navigate('CourseSCR')}>
                <Text> Popular Screen</Text>
                </TouchableOpacity>
 */