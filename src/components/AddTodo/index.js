import React, { Component } from "react";
import { Modal, Text, View, StyleSheet, TextInpu, TouchableOpacity, Button, TextInput,  Picker} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  content: {
    padding: 20,
    paddingBottom: 30,
    flex: 1,
    backgroundColor: "#ffffff",
    shadowOffset: { width: 0, height: -3 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 30
  },
  block: {
    margin: 10
  },
  text: {
    borderBottomWidth: 1,
    padding: 5
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20
  },
  closeIcon: {
    color: "#fff"
  }
});
const initialState = {
  text: "",
  description: "",
  priority: 2
}

const priorities = ["Urgente", "Importante", "Normal", "No Importante"];

export default class AddTodo extends Component {
  constructor(props){
    super(props)
    this.state = {
        ...initialState
    }
  }

 addTodo = () =>{
   const {onAddTodo, onCloseModal} = this.props;
   const {text, description, priority} =  this.state;
   onAddTodo({text, description, priority});
   this.setState(initialState);
   onCloseModal();
 }
  render() {
    const {visible, onCloseModal} = this.props;
    const {text, description, priority} = this.state;
    return (
      <Modal visible={visible} transparent={true} animationType="slade">
     
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.block}>
              
              <Text> Titulo</Text>
              <TextInput
                style={styles.text}
                value={text}
                onChangeText={text => this.setState({ text })}
                clearButtonMode="always"
              />
            </View>
            <View style={styles.block}>
              <Text> Descripción</Text>
              <TextInput
                style={styles.text}
                value={description}
                onChangeText={description =>
                  this.setState({ description })
                }
                clearButtonMode="always"
              />
            </View>
            <View style={styles.block}>
            <Text> Prioridad</Text>
            <Picker
                selectedValue={priority}
                onValueChange={priority => this.setState({priority})}
            >
               {priorities.map((item, index) =>(

                <Picker.Item label={item} value={index}/>
               ))}
                
                
            </Picker>
            </View>
            <View style={styles.buttonRow}>
              <Button title="Cerrar" onPress={onCloseModal} color="#ff0000" />
              <Button title="Añadir" onPress={this.addTodo} />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
