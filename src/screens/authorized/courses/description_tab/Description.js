import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    Dimensions, Image, TouchableOpacity,
    ScrollView, WebView
} from 'react-native';
import { Icon, Button } from 'native-base';
import StarRating from 'react-native-star-rating';
import PopupDialog, {
    DialogTitle,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
    DefaultAnimation,
} from 'react-native-popup-dialog';

import { connect } from 'react-redux';
import { fetchCourseById } from '../../../../redux/actions/courseByID';



class Description extends Component {

    constructor(props) {
        super(props);
        url = `http://api-dot-hola-edu.appspot.com/api?action=getCourses&ids=[${this.props.navigation.state.params.courseId}]`
        this.state = {
            starCount: this.props.vote,
        }
    }
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    componentWillMount() {
        // this.getCourseById(this.props.navigation.state.params.courseId)
        this.props.getCourseById(`http://api-dot-hola-edu.appspot.com/api?action=getCourses&ids=[${this.props.navigation.state.params.courseId}]`)
    }

    render() {

        const { course, isFetching } = this.props


        return (
            <View style={styles.container}>
                {
                    isFetching && <Text>Loading</Text>
                }
                {
                    course.map((e, i) =>
                        <View key={i}>
                            <Image source={{ uri: course.avatar }}
                                style={{ flex: 1 }}
                            />
                            <View style={styles.infoStyle}>
                                <View style={styles.infoText}>
                                    <Text style={[...styles.textStyle, { fontWeight: 'bold' }]}>{e.name}</Text>
                                    <Text style={[...styles.textStyle, { color: '#696969' }]}
                                        numberOfLines={3}>{e.shortDescription}</Text>
                                    <Text style={[...styles.textStyle, { fontWeight: 'bold' }]}>Create by {e.ownerName}</Text>

                                </View>

                                <View style={styles.rateView}>
                                    <StarRating
                                        disabled={false}
                                        starSize={20}
                                        emptyStar={'ios-star-outline'}
                                        fullStar={'ios-star'}
                                        halfStar={'ios-star-half'}
                                        iconSet={'Ionicons'}
                                        maxStars={5}
                                        rating={this.state.starCount}
                                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                                        starColor={'red'}
                                    />
                                    <View style={{ width: 150 }} />
                                    <Button light onPress={() => { this.popupDialog.show() }}><Text>Vote</Text></Button>
                                </View>
                                <Button
                                    primary style={{ marginLeft: (width / 2) - 40 }}
                                    onPress={() => { this.props.navigation.navigate('JoinSCR') }}
                                >
                                    <Text style={{ color: '#fff' }}>Join</Text>
                                </Button>
                             
                                    <View style={{height: 500,backgroundColor:'red',marginTop: 10}}>
                                    
                                    <WebView
                                    style={{ backgroundColor: '#f4f7f9',marginBottom: 20 }}
                                        source={{ html: e.description }}
                                    />
                                    </View>
                              
                            </View>
                            <PopupDialog
                                dialogTitle={<DialogTitle title="Rate Me" />}
                                ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                                dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
                            >
                                <View>
                                    <Text>Thank for your feedback!Have you fun!!!</Text>
                                    <Text>You rated {this.state.starCount} star!</Text>
                                </View>
                            </PopupDialog>
                        </View>)
                }
            </View>
        );
    }
}
const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f7f9',
    },

    textStyle: {
        fontSize: 15,
        margin: 5,


    },
    infoStyle: {
        flex: 1,
        padding: 15,
        justifyContent: 'space-between',

    },
    rateView: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center'
    },
    infoText: {
        justifyContent: 'space-between',
        height: 70
    }

})
const mapStateToProps = (state) => {

    return {
        course: state.courseById.data,
        isFetching: state.courseById.isFetching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCourseById: (url) => {
            dispatch(fetchCourseById(url))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Description);

