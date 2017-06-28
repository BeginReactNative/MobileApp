import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    View
} from 'react-native';
import {Icon} from 'native-base';
import { CardStack, Card } from 'react-native-cardstack'

import people from '../screens/authorized/home/created_tab/People';




const ProfilePicture = ({ imgSrc, borderColor }) => (
    <Image
        style={[styles.img, { borderColor: borderColor }]}
        source={{ uri: imgSrc }}
    />
);

const DetailsRow = ({ icon, title, summary, createDate }) => {
    return (
        <View style={styles.detailsRow}>
            <View style={styles.detailsIcon}>
                <Icon
                    name={icon}
                    size={27}
                    color='#fff'
                />
            </View>
            <View>
            
                <Text style={styles.detailsTitle}>
                    {title}
                </Text>
                
                
                <Text style={styles.detailsSummary} numberOfLines={5}>
                    {summary}
                </Text>
                
            </View>
        </View>
    );
};
const TeamMemberCard = (props) => (
   
    <View style={{justifyContent: 'space-between'}}>
        <View style={styles.cardHeader}>
            <View>
                <ProfilePicture
                    imgSrc={props.imgSrc}
                    borderColor={props.imgBorderColor}
                />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.headerName}>{props.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name='ios-arrow-down-outline'
                        style={{ marginRight: 10, paddingTop: 5 }}
                        size={20}
                        color='rgba(255, 255, 255, 0.7)'
                    />
                    <Text style={styles.headerTitle}>{props.ownerName}</Text>
                </View>
            </View>
        </View>

        <View>
            <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
                <DetailsRow
                        icon='pricetags'
                        title={`${props.lessonIds.length} lessons`}
                        
                    />
                    <DetailsRow
                        icon='time'
                        title={`${new Date(props.createDate).getDate()}/${new Date(props.createDate).getMonth()}`}
                    />
            </View>
                
            
           <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                 <View style={{flexDirection:'row', marginLeft: 20, marginRight: 30}}>
                    <Icon name='star' />
                    <Icon name='star' />
                    <Icon name='star' />
                    <Icon name='star' />
                    <Icon name='star' />
                 </View>
                 <DetailsRow
                 icon='person'
                 title={`${props.memberIds.length} Members`}
                 />
           </View>
           
            <DetailsRow
                icon='ios-paper-outline'
                title='Description:'
                summary={props.role}
            />
        </View>
        <TouchableOpacity onPress={props.gotoCourse}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.detailsTitle}>DETAIL</Text>
            </View>
        </TouchableOpacity>
    </View>
);

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
	container: {
		paddingTop: 40,
		flex: 1,
		justifyContent: 'space-between',
	},
	exampleTitle: {
		fontSize: 28,
		fontFamily: 'Futura-Medium'
	},
	cardHeader: {
		flexDirection: 'row',
		height: 100,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 20,
		paddingRight: 20,
	},
	headerName: {
		margin: 0,
		fontWeight: '500',
		fontSize: 23,
		color: '#fff',
		textAlign: 'right'
	},
	headerTitle: {
		marginTop: 4,
		fontWeight: '300',
		fontSize: 16,
		color: '#fff',
		opacity: 0.8,
	},
	img: {
		width: 60,
		height: 60,
		borderRadius: 60	/2,
		borderWidth: 3,
	},
	detailsRow: {
		flexDirection: 'row',
		paddingLeft: 20,
		paddingRight: 20,
		marginBottom: 20,
   
        width: 80,
        marginRight: 10
     
	},
	detailsIcon: {
		alignItems: 'center',
		width: 25,
		height: 35,
		marginRight: 20,
		alignSelf: 'flex-start',
		borderBottomWidth: 1,
		borderColor: 'rgba(255, 255, 255, 0.8)',
	},
	detailsTitle: {
		fontWeight: '500',
		fontSize: 19,
		color: '#fff',
		margin: 0,
		fontStyle: 'italic',
        
	},
	detailsSummary: {
		fontWeight: '300',
		color: '#fff',
		lineHeight: 22,
		width: 300,
	},
});
export default TeamMemberCard;
