import { TabNavigator } from 'react-navigation';
import Created from '../screens/authorized/home/created_tab/Created';
import Joined from '../screens/authorized/home/joined_tab/Joined';
import Popular from '../screens/authorized/home/popular_tab/Popular';
const HomeNav = TabNavigator({
    Created: {
        screen: Created
    },
    Joined: {
        screen: Joined
    },
    Popular: {
        screen: Popular
    }
},
{
    tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
            fontSize: 15,
            color: '#fff'
        },
        style: {
            backgroundColor: '#4054B2',
            
        },

    },
    tabBarPosition: 'bottom',
 
   
});
export default HomeNav;
