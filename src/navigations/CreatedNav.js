import { StackNavigator } from 'react-navigation';
import Created from '../screens/authorized/home/created_tab/Created';
import Course from '../screens/authorized/course/Course';
import Popular from '../screens/authorized/home/popular_tab/Popular';
import Join from '../screens/authorized/join/Join';
import Vote from '../screens/authorized/vote/Vote';
const CreateNav = StackNavigator({
    CreatedSCR: {
        screen: Created,
        navigationOptions: {
            header: null
            
        }
    },
    JoinSCR: {
        screen: Join,
        navigationOptions: {
            header: null,
            tabBarVisible: false
        }
    },
    VoteSCR: {
        screen: Vote
    },
    CourseSCR: {
        screen: Course,
        navigationOptions: {
            header: null,
            tabBarVisible: false
        }
    }
});
export default CreateNav;
