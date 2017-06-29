import React, { Component } from 'react';
import {View, Text,StyleSheet,
        Dimensions, Image,TouchableOpacity,
        ScrollView
} from 'react-native';
import {Icon,Button} from 'native-base';
import StarRating from 'react-native-star-rating';
import PopupDialog, {
  DialogTitle,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
  DefaultAnimation,
} from 'react-native-popup-dialog';
import Header from '../../../../components/Header';
import Courses from '../../home/created_tab/People';

class Description extends Component {
    constructor(props){
        super(props);
        this.state = {
            course: {},
            starCount: 3.5
        }
    }
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    componentDidMount() {
        this.getCourseById(this.props.navigation.state.params.courseId)
       
       
        
    }
    getCourseById(id) {
        for (var index = 0; index < Courses.length; index++) {
           if(Courses[index].id == this.props.navigation.state.params.courseId) {
               this.setState({
                   course: Courses[index]
                   
               })
               console.log('AAA',this.state.course)
           }
        }
    }
    render() {
        
    
         
        return(
            <View style={styles.container}>
                    <Image source={{uri: this.state.course.avatar }}
                           style={{width: width - 50, height: 120,margin:10}}
                       />
                    <View style={styles.infoStyle}>
                        <View style={styles.infoText}>
                            <Text style={[...styles.textStyle, { fontWeight: 'bold' }]}>{this.state.course.name}</Text>
                            <Text style={[...styles.textStyle, { color: '#696969' }]}>{this.state.course.shortDescription}</Text>
                            <Text style={[...styles.textStyle, { fontWeight: 'bold' }]}>Create by {this.state.course.ownerName}</Text>
                            <PopupDialog
                                dialogTitle={<DialogTitle title="Dialog Title" />}
                                ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                                dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
                            >
                                <View>
                                    <Text>{this.state.rating}</Text>
                                </View>
                            </PopupDialog>
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
                            <Button light onPress={() => {this.popupDialog.show()}}><Text>Vote</Text></Button>
                        </View>
                        <Button
                            primary style={{ marginLeft: (width / 2) - 40 }}
                            onPress={() => { this.props.navigation.navigate('JoinSCR') }}
                        >
                            <Text style={{color:'#fff'}}>Join</Text>
                        </Button>


                        <Text>{this.state.course.description}</Text>




                    </View>
            </View>      
        );
    }
}
const {height,width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
    flex            : 1,
    backgroundColor : '#f4f7f9',        
    },
   
    textStyle : {
        fontSize: 15,
        margin: 5,
        
       
    },
    infoStyle: {
        flex:1,
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
export default Description;

/**
 * Navigate 
 *   <TouchableOpacity onPress={() => this.props.navigation.navigate('JoinSCR')}>
                    <Text>Goto Join Screen</Text>
                </TouchableOpacity>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('JoinSCR')}>
                    <Text>Goto Vote Screen</Text>
                </TouchableOpacity>
                 <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
 */