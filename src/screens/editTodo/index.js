import React, { Component } from 'react'
import { Text, View, StyleSheet,Image } from 'react-native'
import BasicAddItems from '../../components/basicAddItems'
import { TouchableOpacity } from 'react-native-gesture-handler'
import saveImage from "../../components/TodoList/assets/save.png"


const styles =  StyleSheet.create({
    icon:{
        width:20,
        height:20,
        tintColor:"#fff",
        marginRight: 20
    }
})

export default class EditTodo extends Component {
    static navigationOptions = ({navigation}) =>({
        title: "Editar Todo",
        headerRight:(
            <TouchableOpacity
                onPress={() =>{
                    navigation.getParam("onSave")(navigation.getParam("updatedTodo"))
                    navigation.goBack();
                }}
            >
                <Image style={styles.icon} source={saveImage}/>
            </TouchableOpacity>
        )
    })
    
  
      constructor(props){
          super(props)
          this.state={
              todo: props.navigation.getParam('todo')
          }
      }

      componentDidMount = async () =>{
        this.props.navigation.setParams({
            updatedTodo: this.state.todo
        })
      };

      updateLocalTodo = property => {
          const newTodo = {...this.state.todo, ...property}
          this.setState({todo: newTodo})
          this.props.navigation.setParams({
            updatedTodo: newTodo
          })
      }
  render() {
      const {todo} = this.state;
      const {text, description, priority} = todo;
    return (
      <View>
        <BasicAddItems
            text={text}
            description={description}
            priority={priority}
            onChange={property => this.updateLocalTodo(property)}
        />
      </View>
    )
  }
}