import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    Dimensions, Image, TouchableOpacity,
    ScrollView
} from 'react-native';
import HomeIcon from '../../../media/icon/icons8-Home-48.png';
import FeedBackIcon from '../../../media/icon/icons8-Graduation Cap-48.png';
import AboutUsIcon from '../../../media/icon/icons8-About-48.png';
import SupportIcon from '../../../media/icon/icons8-Online Support-48.png';
import ContactIcon from '../../../media/icon/icons8-New Contact-48.png';
import SettingIcon from '../../../media/icon/icons8-Settings-48.png';
import CoursesIcon from '../../../media/icon/icons8-E Learning-48.png';
import LoginIcon from '../../../media/icon/icons8-Login-48.png';
const ItemMenu = (title, navigation, imgSource) => {
    return (
        <TouchableOpacity style={styles.listMenu} onPress={navigation}>
            <Image source={imgSource} style={styles.iconStyle} />
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
        </TouchableOpacity>
    )
}

class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatarImg}
                        resizeMode='stretch'
                        source={{ uri: 'https://hola-edu.appspot.com/resources/images/home/hs1.jpg' }}
                    />
                    <Text>User: Beautiful Girl</Text>
                </View>
                <ScrollView>
                    {
                        ItemMenu('Home', () => { this.props.navigation.navigate('DrawerClose') }, HomeIcon)
                    }
                    {
                        ItemMenu('LogIn', () => { }, LoginIcon)
                    }
                    {
                        ItemMenu('Courses', () => { }, CoursesIcon)
                    }
                    {
                        ItemMenu('FeedBack', () => { }, FeedBackIcon)
                    }
                    {
                        ItemMenu('About Us', () => { }, AboutUsIcon)
                    }
                    {
                        ItemMenu('Support', () => { }, SupportIcon)
                    }
                    {
                        ItemMenu('Contact', () => { }, ContactIcon)
                    }
                    {
                        ItemMenu('Setting', () => { }, SettingIcon)
                    }
                </ScrollView>
                <View style={[styles.avatarContainer,{borderBottomWidth:0}]}>
                    <Text style={{fontSize: 25,fontWeight:'bold',color: 'green'}}>E-LEARNING VER 1.0</Text>
                    <Text style={{fontSize: 18}}>KoolSoft Company 2017</Text>
                </View>
            </View>
        );
    }
}
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    avatarContainer: {
        width: width,
        height: height * 0.25,
        borderBottomWidth: 1,
        borderColor: '#696969',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    avatarImg: {
        alignSelf: 'center',
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 1,
    },
    listMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        height: height * 0.1,
        borderBottomWidth: 1,
        borderBottomColor: '#FAFAFA'
    },
    iconStyle: {
        width: 25,
        height: 25,
        marginRight: 15
    }
})
export default Menu;