import React, { Component } from 'react'
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Animated,
    TouchableWithoutFeedback,
    Image
} from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import data from '../../../api/data.json';
import StatefulButton from '../../../components/ButtonLoading';

const HeaderComponent = ({ iconName, title, numberA }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'space-between', marginRight: 5, paddingLeft: 5 }}>
        <Icon name={iconName} style={{ color: 'orange', marginLeft: 5 }} />
        <Text>{title}</Text>
        <View style={{ width: 40 }} />
        <Text style={{ color: 'red' }}>{numberA}</Text>
    </View>
)
class Choose extends Component {
    constructor(props) {
        super(props);
        this.colorValue = new Animated.Value(0);
    }
    shuffleArray(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    press() {
        //do anything you want
        this.props.navigation.navigate('Game', { dataExam: this.props.finalCard.slice(0, 20) })
        
    }
    onPress() {
        this.props.onPress();
        this.changeColor();
    }
    changeColor() {
        this.setState({
            is_loading: true
        });

        this.colorValue.setValue(0);
        Animated.timing(this.colorValue, {
            toValue: 100,
            duration: 3000
        }).start(() => {
            this.setState({
                is_loading: false
            });
        });
    }
    render() {

        //Animation for Button Start
        const colorAnimation = this.colorValue.interpolate({
            inputRange: [0, 50, 100],
            outputRange: ['#2196f3', '#ccc', '#8BC34A']
        });

        const { navigate } = this.props.navigation;

        const shuffledPosts = this.shuffleArray(this.props.finalCard);

        return (
            <View style={styles.container}>
                {/*Description View for Exercise or Test*/}
                <ScrollView>
                    <View style={styles.headerLesson}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>SAT Test 1</Text>
                        <View style={styles.headerTitle}>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <HeaderComponent iconName='time' title='Time' numberA='10' />
                                <HeaderComponent iconName='ios-book-outline' title='Sentence' numberA='20' />
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <HeaderComponent iconName='ios-cafe-outline' title='Passed' numberA='108' />
                                <HeaderComponent iconName='ios-bus-outline' title='Level' numberA='1' />
                            </View>
                        </View>
                    </View>
                    <View style={styles.discussion}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Discussion</Text>
                    </View>
                    <View style={styles.topPlayer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>TopPlayer</Text>
                    </View>
                </ScrollView>
                {/*View Button Stat*/}
                <View style={styles.footer}>
                    <StatefulButton
                        label="START"
                        onPress={this.press.bind(this)}
                        styles={{ label: styles.button_label }}
                    />
                </View>
            </View>


        );
    }
}

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
const textButtonStart = "Bắt đầu";
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: widthScreen,
        height: heightScreen / 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6e6e6'
    },
    buttonStart: {
        backgroundColor: '#0080ff',
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#d9d9d9',
        width: widthScreen - 20,
        height: heightScreen / 9 - 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 15
    },
    textButtonStart: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white'
    },
    headerLesson: {
        height: heightScreen * 0.2,
        borderBottomWidth: 1,
        margin: 10
    },
    headerTitle: {
        flex: 1
    },
    discussion: {
        height: heightScreen * 0.25,
        borderBottomWidth: 1,
        margin: 10
    },
    topPlayer: {
        height: heightScreen,
        borderWidth: 1,
        borderRadius: 10,
        margin: 10
    },
    button_label: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }

})
const mapStateToProps = (state) => {
    return {
        finalCard: state.cardById.data,
        isFetching: state.cardById.isFetching,
    }
}
export default connect(mapStateToProps)(Choose);

//                      <TouchableOpacity
//                         style={styles.buttonStart}
//                         onPress={() => navigate('Game', { dataExam: this.props.finalCard.slice(0, 20) })}>
//                         <Text
//                             style={styles.textButtonStart}>
//                             {textButtonStart}
//                         </Text>
//                     </TouchableOpacity>
