import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
   // TouchableOpacity,
    Dimensions,
    View
} from 'react-native';
import {Icon} from 'native-base';
import { CardStack, Card } from 'react-native-cardstack'
import Header from '../../../../components/Header';
import course from './People';
import TeamMemberCard from '../../../../components/CardItems';
import HotCourse from '../../../../components/HotCourse';
// Staless component 


class Created extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    openMenu={() => this.props.navigation.navigate('DrawerOpen')}
                    title={'LoxoToeic'}
                />
                <View style={{ flex: 1 }}>
                   
                </View>
                <CardStack
                    height={400}
                    width={width}
                    transitionDuration={300}
                    backgroundColor='#f8f8f8'
                    hoverOffset={60}
                    
                >
                    
                    {course.map((course, i) =>
                        <Card
                            key={i}
                            onPress={() => console.log('onPress called')}
                            onLongPress={() => console.log('long press called')}
                            backgroundColor={course.background}>
                            
                            <TeamMemberCard
                             {...course} 
                             gotoCourse={() => {this.props.navigation.navigate('CourseSCR')}}/>
                        </Card>
                    )}

                </CardStack>
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

export default Created;