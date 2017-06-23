import React, { Component } from 'react';
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

export default class Headers extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
             <Container >
                <Header hasTabs>
                    <Left>
                        <Button
                            transparent
                            onPress={this.props.openMenu}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.props.title}</Title>
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
                </Container>
        )
    }
}
