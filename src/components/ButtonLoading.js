import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  Animated,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
 class StatefulButton extends Component {

	constructor(props) {
		super(props);
		this.colorValue = new Animated.Value(0);
		this.state = {
			is_loading: false
		}
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

	onPress() {
		this.props.onPress();
		this.changeColor();
	}

	render() {

		const colorAnimation = this.colorValue.interpolate({
		  inputRange: [0, 50, 100],
		  outputRange: ['#2196f3', '#ccc', '#8BC34A']
		});

		return (
			<TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
				<Animated.View style={[
					styles.button_container,
					this.props.noDefaultStyles ? '' : styles.button, 
					this.props.styles ? this.props.styles.button : '',
					{
						backgroundColor: colorAnimation
					},
					]}>
					{ 
						this.props.isFetching && 
						<Image
						  style={styles.loader}
						  source={require('../media/icon/ajax-loader.gif')}
						/>
					}
			    	<Text style={this.props.styles.label}>
			    	{ this.props.isFetching ? 'loading...' : this.props.label}
			    	</Text>
				</Animated.View>
			</TouchableWithoutFeedback>
		);
	}
}
const mapStateToProps = (state) => {
    return {
        
        isFetching: state.cardById.isFetching,
    }
}

export default connect(mapStateToProps)(StatefulButton);




const {width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
	button_container: {
		  backgroundColor: '#0080ff',
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#d9d9d9',
        width: width - 20,
        height: height / 9 - 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 15
	},
	button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderWidth: 1,
		borderColor: '#eee',
		margin: 20
    },
    loader: {
    	width: 16,
    	height: 16,
    	marginRight: 10
    }
});