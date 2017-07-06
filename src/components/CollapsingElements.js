import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Animated, TouchableOpacity } from 'react-native';
import Topics from '../api/apiTopic';
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
    {
        title: 'First',
        content: 'Lorem ipsum...',
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...',
    }
];


class Panel extends Component {
    _renderHeader(section) {
        return (
            <View style={{height:50,paddingLeft:10}}>
                <Text >{section.title}</Text>
            </View>
        );
    }

    _renderContent(section) {
        return (
            <View >
                <Text>{section.content}</Text>
            </View>
        );
    }


    constructor(props) {
        super(props);

        this.icons = {     //Step 2
            'up': require('../media/icon/up.png'),
            'down': require('../media/icon/down.png')
        };

        this.state = {       //Step 3
            title: props.title,
            expanded: true,
            animation: new Animated.Value(),
            isLoading: true,
            dataSource: [],
        };
    }
    componentDidMount() {
    }
    toggle() {
        let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded: !this.state.expanded
        });

        this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();
    }

    _setMaxHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    }

    render() {

        let icon = this.icons['down'];

        if (this.state.expanded) {
            icon = this.icons['up'];
        }


        return (
            <Animated.View
                style={[styles.container, { height: this.state.animation }]}>
                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        ></Image>
                    </TouchableHighlight>
                </View>

                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                    {
                        Topics.length ? (
                            Topics.map((topic, i) => {
                                return <View key={i} onPress={() => { }}>
                                    <Accordion
                                        sections={SECTIONS}
                                        renderHeader={this._renderHeader}
                                        renderContent={this._renderContent}
                                    />
                                    </View>
                            })
                        ) : null
                    }
                </View>

            </Animated.View>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        overflow: 'hidden'
    },
    titleContainer: {
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        padding: 10,
        color: '#2a2f43',
        fontWeight: 'bold'
    },
    button: {

    },
    buttonImage: {
        width: 30,
        height: 25
    },
    body: {
        padding: 10,
        paddingTop: 0
    },
    lessonView: {
        height: 60,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    colapContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  collapTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
});
export default Panel;
/**
 * 
 */