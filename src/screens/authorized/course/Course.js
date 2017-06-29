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
import Description from '../courses/description_tab/Description';
import Discussion from '../courses/discussion_tab/Discussion';
import Lesson from '../courses/lesson_tab/Lesson';
import Document from '../courses/document_tab/Document';


export default class HomeScreen extends React.Component {
   

    render() {
        return (
            <Container >
                <Header hasTabs>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name="md-arrow-round-back" />
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
                    <Tab heading="Description" textStyle={{ fontSize: 10 }} activeTextStyle={{ fontSize: 12 }} >
                        <Description navigation={this.props.navigation}/>
                    </Tab>
                    <Tab heading="Lesson" textStyle={{ fontSize: 10 }} activeTextStyle={{ fontSize: 12 }}>
                        <Lesson navigation={this.props.navigation}/>
                    </Tab>
                     <Tab heading="Document" textStyle={{ fontSize: 10 }} activeTextStyle={{ fontSize: 12 }}>
                        <Document />
                    </Tab>
                     <Tab heading="Discussion" textStyle={{ fontSize: 10 }} activeTextStyle={{ fontSize: 12 }}>
                        <Discussion />
                    </Tab>
                   

                </Tabs>
                    
                
            </Container>
        );
    }
}