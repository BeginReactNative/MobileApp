import {StackNavigator} from 'react-navigation';
import Choose from '../screens/authorized/Test1';
import Game from '../screens/TestScreen';
const TestNav = StackNavigator({
    Choose: { screen: Choose },
    Game: {screen: Game ,navigationOptions:{ header: null}}
})

export default TestNav;
