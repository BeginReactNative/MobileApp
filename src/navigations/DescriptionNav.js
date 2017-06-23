import { StackNavigator } from 'react-navigation';
import Description from '../screens/authorized/courses/description_tab/Description';
import Join from '../screens/authorized/join/Join'
const DescriptionNav = StackNavigator({
    DescriptionSCR: {
        screen: Description,
        navigationOptions: {
            header: null,
            
        }
    },
  
    JoinSCR: {
        screen: Join,
        navigationOptions: {
            header: null,
            tabBarVisible: false
        }
    }
});
export default DescriptionNav;