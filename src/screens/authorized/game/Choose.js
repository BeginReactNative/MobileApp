import React, { Component } from 'react'
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import data from '../../../api/data.json';

class Choose extends Component {
    constructor(props) {
        super(props)
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
    render() {
        const { navigate } = this.props.navigation;
        console.log('FINAL CARD', this.props.finalCard)
        const shuffledPosts = this.shuffleArray(this.props.finalCard);
        console.log('RANDOM CARD',shuffledPosts)
        return (
            <View style={styles.container}>

                {/*View Button Stat*/}
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.buttonStart}
                        onPress={() => navigate('Game', { dataExam: this.props.finalCard.slice(0,20) })}>
                        <Text
                            style={styles.textButtonStart}>
                            {textButtonStart}
                        </Text>
                    </TouchableOpacity>
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
    }


})
const mapStateToProps = (state) => {
    return {
        finalCard: state.cardById.data,
        isFetching: state.cardById.isFetching,
    }
}
export default connect(mapStateToProps)(Choose);
