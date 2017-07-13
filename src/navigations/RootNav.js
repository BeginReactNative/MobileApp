import {
    StackNavigator
} from 'react-navigation';
import Auth from './AuthNav';
import UnAuth from './UnAuth';
import Course from '../screens/authorized/course/Course';
import Join from '../screens/authorized/join/Join';
import Vote from '../screens/authorized/vote/Vote';
import LessonList from '../screens/authorized/courses/lesson_tab/ChildLesson';
import LessonDetail from '../screens/authorized/courses/lesson_tab/LessonDetail';
import Exercise from '../screens/authorized/courses/lesson_tab/Exercise';
import Choose from '../screens/authorized/game/Choose';
import Game from '../screens/authorized/game/GameView';
const rootNav = StackNavigator({
    UnAuthorized: {
        screen: UnAuth,
        navigationOptions: {
            header: null
        }
    },
    Authorized: {
        screen: Auth,
        navigationOptions: {
            header: null
        }
    },
     CourseSCR: {
        screen: Course,
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
    LessonListSCR: {
        screen: LessonList,
        navigationOptions: {
            header: null,
            tabBarVisible: false,
            

        }
    },
    ExerciseSCR: {
        screen: Exercise,
        navigationOptions: {
            header: null,
            tabBarVisible: false
        }
    },
    MiniGameSCR: {
        screen: Choose,
        navigationOptions: {
            header: null,
            tabBarVisible: false
        }
    },
    Game: {
        screen: Game,
        navigationOptions: {
            header: null,
            tabBarVisible: false
        }
    },
  
    LessonDetailSCR: {
        screen: LessonDetail,
        navigationOptions: {
            header: null,
            tabBarVisible: false
        }
    }
})
export default rootNav;