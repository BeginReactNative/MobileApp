import React from 'react';
import { DrawerNavigator } from 'react-navigation'; 
import HomeTab from './HomeNav';
import Menu from '../screens/authorized/Menu';

const AppDrawer = DrawerNavigator({
    HomeSCR: {
        screen: HomeTab,
       
    }
    
},
    {
        drawerWidth: 250,
        drawerPosition: 'left',
        contentComponent: props => <Menu />
    }
)
export default AppDrawer;
