import React , {Component} from 'react';
import {View, Text,ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import Documents from '../../../../api/apiDocument';
class Document extends Component {
    constructor(props) {
    super(props);
  
    this.state = {
      isLoading: true,
      dataSource:[],
     
    }
  }
    componentDidMount() {
  
   
  }
    render() {
        return(
            <ScrollView style={styles.container}>
            <View style={styles.titleHead}>
                      <Text>File name</Text>
                      <Text>Size</Text>
                      <Text>Type</Text>
                      <Text>Dowloaded</Text>
                      <TouchableOpacity>
                        <Icon name='document' />
                      </TouchableOpacity>
                    </View>
            {
                    Documents.length ? (
                        Documents.map((documents, i) => {
                  return <View key={i} style={styles.container}>
                    
                    <View style={styles.titleHead} >
                      <Text style={{width: 50}}>{documents.title}</Text>
                      <Text style={{width: 30}}>{((documents.size) / 1000000).toFixed(2)} Mb</Text>
                      <Text>docx</Text>
                      <Text>{documents.download}</Text>
                      
                      <TouchableOpacity>
                        <Icon name='download' />
                      </TouchableOpacity>

                    </View>


                  </View>
                        })
                    ) : null
                }
                
              
            </ScrollView>
        )
    }
}
var styles = {
  container: {
    flex            : 1,
    backgroundColor : '#f4f7f9',
   
  },
  titleHead: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderWidth: 1,
    alignItems: 'center',
    padding: 5 
  },
 
  
};
export default Document;

