import { StackNavigator } from 'react-navigation';
import Joined from '../screens/authorized/home/joined_tab/Joined'
import Course from '../screens/authorized/course/Course';
const JoinedNav = StackNavigator({
    JoinedSCR: {
        screen: Joined,
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
export default JoinedNav;