import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {fetchChildTopicsById} from '../../../../redux/actions/childTopicById';
import TreeView from './react-native-treeview';

const styles = StyleSheet.create({
  node: {
    paddingTop: 2,
    paddingRight: 10,
    paddingBottom: 2,
    paddingLeft: 5,
  },
});
class CompanyPeople extends React.Component {
  render() {
   console.log('CCCC',this.props)
    return (
      <View>
        {this.props.topics.map((node, i) => {
          
          const type = node.name;
          const label = (
            <Text style={styles.node}>
              {type}
            </Text>
          );
          return (
            <TreeView
              key={type + '|' + i}
              nodeLabel={label}
              defaultCollapsed={false}
            >
              {this.props.childTopics.map((topic, i )=> {
                
                return (
                  <View key={i}>
                    <Text >{topic.name}</Text>
                  </View>
                  
                );
              })}
            </TreeView>
          );
        })}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topics: state.topicById.data,
    childTopics: state.childTopicById.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getChildTopic: (url) => {
      dispatch(fetchChildTopicsById(url))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CompanyPeople);
/**
 *    <TreeView
                    nodeLabel={label2}
                    key={person.name}
                    defaultCollapsed={true}
                  > 
                    <TouchableOpacity>
                    <Text style={styles.node}>age: 1</Text>
                    </TouchableOpacity>
                    
                    <Text style={styles.node}>sex: 2</Text>
                    <Text style={styles.node}>role: 3</Text>
                  </TreeView>
 */