import React,{Component} from 'react'; 
import { StyleSheet,Text,View,Image,TouchableHighlight,Animated,TouchableOpacity } from 'react-native';
class Panel extends Component{
    constructor(props){
        super(props);

        this.icons = {     //Step 2
            'up'    : require('../media/icon/down.png'),
            'down'  : require('../media/icon/up.png')
        };

        this.state = {       //Step 3
            title       : props.title,
            expanded    : true,
            animation   : new Animated.Value(),
            isLoading: true,
            dataSource:[],
        };
    }
    componentDidMount() {
        
    // fetch Course Data from API by ID
    return fetch(`http://api-dot-hola-edu.appspot.com/api?action=getTopics&ids=[${this.props.topicID}]`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
           
        }, function() {
          // do something with new state
          console.log('TOPICCCCCCCCC',this.state.dataSource)
          
        });
      })
      
      .catch((error) => {
        console.error(error);
      });
      
  }
    toggle(){
        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded : !this.state.expanded
        });

        this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();
    }

     _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }

    render(){
        
        let icon = this.icons['down'];
       
         if(this.state.expanded){
            icon = this.icons['up'];
        }
        
      
        return ( 
             <Animated.View 
                style={[styles.container,{height: this.state.animation}]}>
                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <TouchableHighlight 
                        style={styles.button} 
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        ></Image>
                    </TouchableHighlight>
                </View>
                
                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                   {
                    this.state.dataSource.length ? (
                        this.state.dataSource.map((topic, i) => {
                                return <TouchableOpacity onPress={() => this.props.navigation.navigate('LessonsDetail',{lesID:`${this.props.topicID}` })}>
                                    <View key={i} style={styles.lessonView}>

                                        <Text>
                                            {topic.name}
                                        </Text>


                                    </View>
                                </TouchableOpacity>
                        })
                    ) : null
                }
                </View>

            </Animated.View>
        );
    }
}
var styles = StyleSheet.create({
    container   : {
        backgroundColor: '#fff',
        margin:10,
        overflow:'hidden'
    },
    titleContainer : {
        flexDirection: 'row'
    },
    title       : {
        flex    : 1,
        padding : 10,
        color   :'#2a2f43',
        fontWeight:'bold'
    },
    button      : {

    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        padding     : 10,
        paddingTop  : 0
    },
    lessonView: {
        height:60,
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center'
        
    }
});
export default Panel;
/**
 * 
 */