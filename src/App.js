import React, { Component } from 'react';
import { StyleProvider,Container } from 'native-base';
import Test from './screens/TestScreen';
import RootNav from './navigations/RootNav';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
class App extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <RootNav />
                </Container>
                
            </StyleProvider>
        );
    }
}

export default App;