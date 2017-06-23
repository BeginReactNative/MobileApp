import {
    StackNavigator
} from 'react-navigation';
import Auth from './AuthNav';
import UnAuth from './UnAuth';
const rootNav = StackNavigator({
   /* UnAuthorized: {
        screen: UnAuth,
        navigationOptions: {
            header: null
        }
    },*/
    Authorized: {
        screen: Auth,
        navigationOptions: {
            header: null
        }
    }
})
export default rootNav;