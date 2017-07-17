import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    Dimensions,
    AppRegistry,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    ViewPagerAndroid,
    TouchableHighlight,
    Modal
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
class GameView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectAnswerDemo: [],
        }
        listCorrect = [];
        listAnswer = ["A", "B", "C", "D", "E", "F", "G", "H"];
        listID = [];
        second = "00";
        min = "00";
        hour = "00";
        seconds = 10;
    }


    // fuction scoring 
    scoring() {
    }
    componentWillMount() {
        for (let i = 0; i < this.props.finalCard.length; i++) {
            listID.push(this.props.finalCard[i].id);
        }
    }

    onPressUserChoose() {

    }

    render() {

        return (
            <View style={styles.container}>
                <ViewPagerAndroid
                    style={{ height: heightScreen - 150 }}
                    ref={(viewPagerAndroid) => this.viewPagerAndroid = viewPagerAndroid}
                    onPageSelected={(e) => {
                        this.scrollView.scrollTo({ x: (e.nativeEvent.position * 70), y: 0, animated: true })
                    }}
                >
                    {
                        this.props.finalCard.map((itemData, j) => {
                            return (
                                <View>
                                    <ScrollView style={{ flex: 1 }} key={j}>
                                        <Text style={[styles.textContent, { color: '#6699ff', marginLeft: 5 }]}>Câu {j}:</Text>
                                        <Question itemData={itemData} />
                                        <View style={styles.line} />
                                        {
                                            itemData.multiChoices.concat(itemData.backText).sort().map((itemAnswer, i) => {
                                                return (
                                                    <Answer
                                                        itemAnswer={itemAnswer}
                                                        listAnswer={listAnswer[i]}
                                                        onPressUserChoose={() => {
                                                            selectAnswerDemo = this.state.selectAnswerDemo;
                                                            selectAnswerDemo[j] = itemAnswer.slice(0, 1);
                                                            this.setState({ selectAnswerDemo: selectAnswerDemo })
                                                        }}
                                                        userChoose={this.state.selectAnswerDemo[j]}
                                                        backText={itemData.backText}
                                                    />
                                                );
                                            })
                                        }
                                    </ScrollView>
                                </View>
                            )
                        })
                    }
                </ViewPagerAndroid>

                <ScrollView
                    horizontal
                    style={{
                        flexDirection: 'row',
                        height: 60,
                    }}
                    ref={(scrollView) => this.scrollView = scrollView}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        listID.map((item, i) => {
                            return (
                                <TouchableHighlight
                                    style={[styles.noAction, { borderColor: 'gray' }]}
                                    underlayColor='#1565C0'
                                    key={i}
                                    onPress={() => {
                                        this.viewPagerAndroid.setPage(i);
                                    }}
                                >
                                    <Text>
                                        {i}
                                    </Text>
                                </TouchableHighlight>
                            );
                        })

                    }
                </ScrollView>
                <ClockCountDown seconds={seconds} />
            </View>
        )
    }
}

class ClockCountDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,//time for exam
        }
    }
    componentWillMount() {
        this.setState({ seconds: this.props.seconds })

    }

    countDown() {
        if (this.state.seconds !== 0) {
            this.setState({
                seconds: this.state.seconds - 1
            })
        }
    }

    // function handle countDownClock
    componentDidMount() {
        setInterval(() =>
            this.countDown()
            , 1000);
    }
    shouldComponentUpdate() {
        return true;
    }
    componentWillUpdate() {
        if (Math.floor(this.state.seconds % 60) < 10) {
            second = "0" + Math.floor(this.state.seconds % 60);
        } else {
            second = Math.floor(this.state.seconds % 60);
        }

        if (Math.floor((this.state.seconds % 3600) / 60) < 10) {
            min = "0" + Math.floor((this.state.seconds % 3600) / 60);
        } else {
            min = Math.floor((this.state.seconds % 3600) / 60);
        }

        if (Math.floor(this.state.seconds / 3600) < 10) {
            hour = "0" + Math.floor(this.state.seconds / 3600);
        } else {
            hour = Math.floor(this.state.seconds / 3600);
        }
    }

    render() {
        return (
            <View style={{
                height: 50,
                flexDirection: 'row'
            }}>
                <View style={styles.countDownClock}>
                    <Icon name="time" style={{ color: 'orange', marginLeft: 5 }} />
                    <Text style={[styles.textContent, { color: '#0080ff', marginLeft: 5 }]}>{hour}:{min}:{second}</Text>
                </View>
                <TouchableHighlight underlayColor='#1565C0' style={styles.buttonBottom} onPress={() => this.props.score()}>
                    <Text style={[styles.textContent, { color: 'white' }]}>Nộp bài</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
class Question extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                {(this.props.itemData.frontText !== "") ? <Text style={[styles.textContent, { marginLeft: 5 }]}>{this.props.itemData.frontText}</Text> : null}
                {(this.props.itemData.fontImage !== "") ? <Image source={{ uri: this.props.itemData.fontImage }} style={{ width: 100, height: heightScreen, marginLeft: 5, marginTop: 5 }} /> : null}
            </View>
        )
    }
}

class Answer extends Component {
    constructor(props) {
        super(props);
    }

    renderView() {
        if (this.props.userChoose === this.props.itemAnswer.slice(0, 1) && this.props.userChoose === this.props.backText.slice(0, 1)) {
            return (
                <Text style={[styles.viewNotChooseAnswer, { borderWidth: 1, borderColor: 'red' }]} >{this.props.listAnswer}</Text>
            )
        }
        if (this.props.userChoose === this.props.itemAnswer.slice(0, 1)) {
            return (
                <Text style={[styles.viewNotChooseAnswer, { borderWidth: 1 }]} >{this.props.listAnswer}</Text>
            )
        } else {
            return (
                <Text style={styles.viewNotChooseAnswer} >{this.props.listAnswer}</Text>
            )
        }
    }
    render() {
        return (
            <TouchableOpacity
                style={styles.itemAnswer}
                onPress={this.props.onPressUserChoose}
            >
                {this.renderView()}
                <Text style={[styles.textContent, { marginLeft: 10, textAlign: 'left' }]}>{this.props.itemAnswer.substring(2)}</Text>
            </TouchableOpacity >
        );
    }
}


export function updateArrayElement(list, index, updateValue) {
    return [
        ...list.slice(0, index),
        updateValue,
        ...list.slice(index + 1)
    ];
}


const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    footer: {

    },
    noAction: {
        borderRadius: 25, borderWidth: 0.5,
        backgroundColor: 'white', margin: 10, width: 50, height: 50,
        justifyContent: 'center', alignItems: 'center',
    },

    viewNotChooseAnswer: {
        borderRadius: 40,
        width: 40,
        height: 40,
        fontSize: 16,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    textContent: {
        color: 'black', fontSize: 16
    },
    line: {
        borderWidth: 0.25, borderColor: '#e6e6e6', marginTop: 30, marginBottom: 20
    },
    itemAnswer: {
        margin: 10, flexDirection: 'row', alignItems: 'center'
    },
    buttonBottom: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
        backgroundColor: "#0080ff"
    },
    countDownClock: {
        flex: 3, borderTopWidth: 0.5, borderTopColor: '#e6e6e6',
        flexDirection: 'row', alignItems: 'center'
    },


});

const mapStateToProps = (state) => {
    return {
        finalCard: state.cardById.data,
        isFetching: state.cardById.isFetching,
    }
}

export default connect(mapStateToProps)(GameView);
