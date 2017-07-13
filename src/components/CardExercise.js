import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

const { widt, height } = Dimensions.get('window')
class CardExercise extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.question}>
                    <Text style={[...styles.text, { fontWeight: 'bold' }]}>{this.props.index}{this.props.frontText}</Text>
                </View>
                <View style={styles.choices}>
                    <Text style={[{ color: 'red' }, ...styles.text]}>{this.props.backText}</Text>
                    {
                        this.props.multiChoices.map((choice, i) => (
                            <Text key={i} style={styles.text}>{choice}</Text>
                        ))
                    }
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        height: height * 0.35,
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },

        shadowRadius: 2,
        shadowOpacity: 1.0,
        elevation: 4
    },
    question: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    choices: {
        flex: 3,
        borderTopWidth: 1,
        justifyContent: 'space-around',
        padding: 10
    },
    text: {
        fontSize: 10
    }
}
export default CardExercise;