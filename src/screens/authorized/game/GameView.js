import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    Dimensions,
    AppRegistry,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';
import { Icon } from 'native-base';
import Swiper from './swiper';
export default class GameView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectAnswer: [-1],//array player choose answer
            seconds: 3670,//time for exam
        }
        listCorrect = [];
        textButtonSubMit = "Nộp bài";
        dataExam = [];
    }

    // function handle countDownClock
    countDown() {
        this.setState({
            seconds: this.state.seconds - 1
        });
    }
    componentDidMount() {
        setInterval(() =>
            this.countDown()
            , 1000);
    }
    // fuction scoring 
    scoring() {
        console.log(listCorrect);
    }
    componentWillMount() {
        const { params } = this.props.navigation.state;
        for (let i = 0; i < params.dataExam.length; i++) {
            dataExam.push(params.dataExam[i]);
            listCorrect.push(params.dataExam[i].correct);
        }
    }

    render() {
        let second, min, hour, timeExam;
        {
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
        return (
            <View style={styles.container}>
                <Swiper
                    ref={(c) => { this.swiperRef = c }}
                    onMomentumScrollEnd={
                        (e, state, context) => {
                            scrollView.scrollTo({ x: (state.index * 70), y: 0, animated: true })
                        }
                    }
                    renderPagination={renderPagination2}
                    paginationStyle={{ bottom: 100, }} loop={false}
                >
                    {
                        dataExam.map((itemData, j) => {
                            textIdQuestion = "Câu " + (j+1) + ":";
                            textQuestion = itemData.frontText;
                             var ABC = itemData.multiChoices.concat(itemData.backText)
                            console.log('MultiChoices',ABC)
                            return (
                                <View key={j} style={{ flex: 1, margin: 20 }}>
                                    <ScrollView>
                                        <Text style={[styles.textContent, { color: '#6699ff' }]}>{textIdQuestion}</Text>
                                        <Text style={styles.textContent}>{textQuestion}</Text>
                                        <View style={styles.line} />
                                        {
                                            
                                            ABC.map((itemAnser, i) => {
                                                answer = itemAnser;
                                                listAnswer = ["A", "B", "C", "D"];
                                                return (
                                                    <TouchableOpacity
                                                        key={i}
                                                        style={styles.itemAnswer}
                                                        onPress={() => {
                                                            this.state.selectAnswer[j] = i + 1;
                                                        }}
                                                    >
                                                        {
                                                            (this.state.selectAnswer[j] === i + 1) ? (
                                                                <View
                                                                    style={styles.viewChooseAnswer}>
                                                                    <Text style={[styles.textContent, { alignSelf: 'center' }]}>{listAnswer[i]}</Text>
                                                                </View>
                                                            ) : (
                                                                    <View
                                                                        style={styles.viewNotChooseAnswer}>
                                                                        <Text style={[styles.textContent, { alignSelf: 'center' }]}>{listAnswer[i]}</Text>
                                                                    </View>
                                                                )
                                                        }

                                                        <Text style={[styles.textContent, { marginLeft: 10 }]}>{answer.substring(2)}</Text>
                                                    </TouchableOpacity>
                                                );
                                            })
                                        }
                                    </ScrollView>
                                </View >
                            )
                        })
                    }
                </Swiper>

                {/*View footer*/}
                <View style={styles.footer}>
                    <View style={styles.countDownClock}>
                        <Icon name="time" style={{ color: 'orange', marginLeft: 5 }} />
                        <Text style={[styles.textContent, { color: '#0080ff', marginLeft: 5 }]}>{hour}:{min}:{second}</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonBottom} onPress={() => this.scoring()}>
                        <Text style={[styles.textContent, { color: 'white' }]}>{textButtonSubMit}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
//redner ra View Bottom
// const renderPagination = (index, total, context) => {

//     items = [];
//     for (let i = 0; i < total; i++) {
//         items.push(
//             <TouchableOpacity key={i} onPress={() => {
//                 context.scrollBy(i);
//             }}>
//                 <View style={[(i === index) ? styles.action : styles.noAction]}>
//                     <Text style={{ textAlign: 'center', color: 'orange', fontSize: 20 }}>
//                         {i + 1}
//                     </Text>
//                 </View>
//             </TouchableOpacity>
//         )
//     }
//     return (
//         <View style={{
//             position: 'absolute',
//             bottom: heightScreen / 13 + 20,
//             flexDirection: 'row',
//         }}>
//             <ScrollView
//                 horizontal
//                 style={{ flex: 1, backgroundColor: 'white' }}
//                 ref={(scrollView) => this.scrollView = scrollView}
//                 showsHorizontalScrollIndicator={false}
//             >
//                 {items}
//             </ScrollView>
//         </View>
//     )
// };



const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: widthScreen,
        height: heightScreen / 13,
        flexDirection: 'row'
    },
    noAction: {
        borderRadius: 25, borderColor: 'gray', borderWidth: 0.5,
        backgroundColor: 'white', margin: 10, width: 50, height: 50,
        justifyContent: 'center', alignItems: 'center'
    },
    action: {
        borderRadius: 25, borderColor: 'blue', borderWidth: 0.5,
        backgroundColor: 'white', margin: 10, width: 50, height: 50,
        justifyContent: 'center', alignItems: 'center'
    },
    viewChooseAnswer: {
        borderWidth: 0.5, borderColor: 'black', borderRadius: 40, width: 40, height: 40,
        justifyContent: 'center', alignItems: 'center'
    },
    viewNotChooseAnswer: {
        width: 40, height: 40,
        justifyContent: 'center', alignItems: 'center'
    },
    textContent: {
        color: 'black', fontSize: 16
    },
    line: {
        borderWidth: 0.25, borderColor: '#e6e6e6', marginTop: 30, marginBottom: 20
    },
    itemAnswer: {
        margin: 10, flexDirection: 'row', alignItems: 'center', height: 50
    },
    buttonBottom: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
        backgroundColor: "#0080ff",
    },
    countDownClock: {
        flex: 3, borderTopWidth: 0.5, borderTopColor: '#e6e6e6',
        flexDirection: 'row', alignItems: 'center'
    },


});




const renderPagination2 = (index, total, context) => {
    // By default, dots only show when `total` >= 2
    if (total <= 1) return null;

    let dots = []

    for (let i = 0; i < total; i++) {
        dots.push(i === index
            ? React.cloneElement(
                <TouchableOpacity key={i} onPress={() => {
                    context.scrollBy(i);
                }}>
                    <View style={styles.action} >
                        <Text>{i + 1}</Text>
                    </View>
                </TouchableOpacity>
                , { key: i })
            : React.cloneElement(
                <TouchableOpacity key={i} onPress={() => {
                    context.scrollBy(i);
                }}>
                    <View style={styles.noAction}>
                        <Text>{i + 1}</Text>
                    </View>
                </TouchableOpacity>, { key: i })
        )
    }

    return (
        <View style={{
            position: 'absolute',
            bottom: heightScreen / 13 + 20,
            flexDirection: 'row',
        }}>
            <ScrollView
                horizontal
                style={{ flex: 1, backgroundColor: 'white' }}
                ref={(scrollView) => this.scrollView = scrollView}
                showsHorizontalScrollIndicator={false}
            >
                {dots}
            </ScrollView>
        </View>
    )
}