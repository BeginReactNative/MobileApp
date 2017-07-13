import { DrawerNavigator } from 'react-navigation'; 
import HomeTab from './HomeNav';
import Menu from '../screens/authorized/Menu';

const AppDrawer = DrawerNavigator({
    HomeSCR: {
        screen: HomeTab
    },
    MenuSCR: {
        screen: Menu
    }
})
export default AppDrawer;
