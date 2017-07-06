import { TabNavigator } from 'react-navigation';
import Created from './CreatedNav';
import Joined from './JoinedNav';
import Popular from './PopularNav';
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
    swipeEnabled: false,
   
});
export default HomeNav;
