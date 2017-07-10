import { StackNavigator } from 'react-navigation';
import ChooseScreen from '../screens/authorized/game/Choose';
import GameScreen from '../screens/authorized/game/GameView';
const TestNav = StackNavigator({
    Choose: {
        screen: ChooseScreen,
        navigationOptions: {
            header: null
        }
    },
    Game: {
        screen: GameScreen,
        navigationOptions: {
            header: null
        }
    }
})

export default TestNav;