import React, { Component } from 'react';
import { StyleProvider,Container } from 'native-base';
import { Provider } from 'react-redux';
import store from './configureStore';

import TestCom from './TestComponent';
import RootNav from './navigations/RootNav';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
class App extends Component {
    render() {
        console.disableYellowBox = true;
        return (
            <Provider store={store}>
            
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <RootNav />
                </Container>
                
            </StyleProvider>
            </Provider>
        );
    }
}

export default App;