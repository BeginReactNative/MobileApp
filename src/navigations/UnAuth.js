import { StackNavigator } from 'react-navigation';
import Login from '../screens/unauthorized/Login';
import SignIn from '../screens/unauthorized/SignIn';

const UnAuthNav = StackNavigator({
    LoginSCR: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    SignInSCR: {
        screen: SignIn,
         navigationOptions: {
            header: null
        }
    }
})
export default UnAuthNav;