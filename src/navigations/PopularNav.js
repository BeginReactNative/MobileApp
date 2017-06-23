import { StackNavigator } from 'react-navigation';

import Course from '../screens/authorized/course/Course';
import Popular from '../screens/authorized/home/popular_tab/Popular'
const PopularNav = StackNavigator({
    PopularSCR: {
        screen: Popular,
        navigationOptions: {
            header: null,
            
        }
    },
  
    CourseSCR: {
        screen: Course,
        navigationOptions: {
            header: null,
            tabBarVisible: false
        }
    }
});
export default PopularNav;
