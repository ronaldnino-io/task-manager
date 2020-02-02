
import React, { Component } from "react";
import { Modal, Text, View, StyleSheet, TextInpu, TouchableOpacity, Button, TextInput,  Picker} from "react-native";
import PriorityPicker from "../PriorityPicker";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "flex-end",
      flexDirection: "row"
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
    },
    textArea:{
        height: 80
    }
  });
 
  
const priorities = ["Urgente", "Importante", "Normal", "No Importante"];
const BasicAddItems = ({
    text, description, priority, onChange
}) => (
    <React.Fragment>
    
            <View style={styles.block}>
              
              <Text> Titulo</Text>
              <TextInput
                style={styles.text}
                value={text}
                onChangeText={text => onChange({ text })}
                clearButtonMode="always"
              />
            </View>
            <View style={styles.block}>
              <Text> Descripción</Text>
              <TextInput
                style={styles.text}
                value={description}
                onChangeText={description => onChange({ description })}
                clearButtonMode="always"
              />
            </View>
            <View style={styles.block}>
            <Text> Prioridad</Text>
            <PriorityPicker 
              priority={priority}
              onChange={priority => onChange({priority})}
            />
            </View>
           
         
    </React.Fragment>
);

export default BasicAddItems;




