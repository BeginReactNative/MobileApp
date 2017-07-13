import React, { Component } from 'react';
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
import PopupDialog from 'react-native-popup-dialog';
export default class Headers extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <Header hasTabs>
                {
                    //Show menu button
                    this.props.menu ? (
                        <Left>
                            <Button
                                transparent
                                onPress={this.props.openMenu}
                            >
                                <Icon name="menu" />
                            </Button>
                        </Left>
                    ) : null
                }
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right>
                    {
                        // Show search button?
                        this.props.search ? (
                            <Button
                                transparent
                                onPress={() => this.props.navigation.navigate('Search')}
                            >
                                <Icon name="search" />
                            </Button>
                        ) : null
                    }
                    {
                        this.props.share ? (
                            <Button
                                transparent
                                onPress={() => this.props.navigation.navigate('DrawerOpen')}
                            >
                                <Icon name="share" />
                            </Button>
                        ) : null
                    }
                    {
                        this.props.notification ? (
                            <Button
                                transparent
                                onPress={() => { this.popupDialog.show() }}
                            >
                                <Icon name="notifications" />
                            </Button>
                        ) : null
                    }

                </Right>

            </Header>

        )
    }
}
