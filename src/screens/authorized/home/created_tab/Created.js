import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    ScrollView,
   // TouchableOpacity,
    Dimensions,
    View
} from 'react-native';
import {Icon} from 'native-base';
import Card from '../../../../components/CardCreated';
import {connect} from 'react-redux';
import {fetchCoursesById} from '../../../../redux/actions/dataAction';
import Header from '../../../../components/Header';



// Staless component 


class Created extends Component {
    constructor(props){
        super(props);
        url= `http://api-dot-hola-edu.appspot.com/api?action=getRandomCourses`
    }
    componentWillMount(){
        this.props.getCourses(url)
    }
    render() {
       
        return (
            <View style={{ flex: 1 }}>
                <Header
                    openMenu={() => this.props.navigation.navigate('DrawerOpen')}
                    title={'LoxoToeic'}
                />
                {
                    this.props.courses.isFetching && <Text>Loading</Text>
                }
                    <ScrollView>
                     {this.props.courses.data.map((course, i) =>
                        <Card key={i}
                            avatar={course.avatar}
                            createDate={course.createDate}
                            shortDescription={course.shortDescription}
                            name={course.name}
                            ownerName={course.ownerName}
                            navigation={() => {this.props.navigation.navigate('CourseSCR',{courseId:course.id})}}
                            
                        />
                    )}
                    </ScrollView>
                   

               
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
export default connect(mapStateToProps,mapDispatchToProps)(Created);