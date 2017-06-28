import React from 'react';
import { View, Image,Text } from 'react-native';
import { Card, Button } from 'react-native-material-design';

const HotCourse = (props) => (
    <View style={{height: 160}}>
                <Card>
                    <Card.Media
                        image={<Image source={{uri: 'https://www.desicomments.com/wp-content/uploads/2017/02/Welcome-Image-1.png'}} />}
                        overlay
                    />
                    <Card.Body>
                        <Text>Some text to go in the body.</Text>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button value="ACTION" text={props.text}/>
                    </Card.Actions>
                </Card>
            </View>
);

export default HotCourse;

