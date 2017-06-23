import React from 'react';
import { View } from 'react-native';
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right,
    Tab,
    Tabs
} from 'native-base';
import Created from './CreatedTab/Created';
import Joined from './JoinedTab/Joined';
import Popular from './PopularTab/Popular';


export default class HomeScreen extends React.Component {
   

    render() {
        return (
            <Container >
                <Header hasTabs>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>TOEIC</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate('Search')}
                        >
                            <Icon name="search" />
                        </Button>
                        <Button
                            transparent
                         onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        >
                            <Icon name="share" />
                        </Button>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        >
                            <Icon name="notifications" />
                        </Button>
                    </Right>

                </Header>
                <Tabs >
                    <Tab heading="CREATED" textStyle={{ fontSize: 10 }} activeTextStyle={{ fontSize: 12 }} >
                        <Created navigation={this.props.navigation}/>
                    </Tab>
                    <Tab heading="JOINED" textStyle={{ fontSize: 10 }} activeTextStyle={{ fontSize: 12 }}>
                        <Joined />
                    </Tab>
                    <Tab heading="POPULAR" textStyle={{ fontSize: 10 }} activeTextStyle={{ fontSize: 12 }}>
                        <Popular />
                    </Tab>
                   

                </Tabs>
                    
                
            </Container>
        );
    }
}