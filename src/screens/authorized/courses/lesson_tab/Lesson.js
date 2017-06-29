
import React , {Component} from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import Panel from '../../../../components/CollapsingElements';
import Topic from '../../../../api/apiTopic';

class Lesson extends Component {
    constructor(props) {
    super(props);
  
    this.state = {

      dataSource:[],
     
    }
  }
    componentDidMount() {
        
  
      
  }


    render() {
    
        return(
            <ScrollView style={styles.container}>
            
            {
                    Topic.length ? (
                        Topic.map((topic, i) => {
                            return <View key={i} >
                                <Panel title={topic.name}
                                       topicID={topic.id}
                                       navigation={this.props.navigation}
                                       
                                >
                                
                                </Panel>
                               
                            </View>
                        })
                    ) : null
                }
                
              
            </ScrollView>
        )
    }
}
var styles = StyleSheet.create({
  container: {
    flex            : 1,
    backgroundColor : '#f4f7f9',
    paddingTop      : 30
  },
  
});
export default Lesson;
/**
 *   
 */
