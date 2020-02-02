import React, { Component } from "react";
import { Modal, Text, View, StyleSheet, TextInpu, TouchableOpacity, Button, KeyboardAvoidingView, Platform} from "react-native";
import BasicAddItems from "../basicAddItems";

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
     
        <View 
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <KeyboardAvoidingView style={styles.content}>
           <BasicAddItems
            text={text}
            description={description}
            priority={priority}
            onChange={newState => this.setState(newState)}
           />
            <View style={styles.buttonRow}>
              <Button title="Cerrar" onPress={onCloseModal} color="#ff0000" />
              <Button title="Añadir" onPress={this.addTodo} />
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    );
  }
}
