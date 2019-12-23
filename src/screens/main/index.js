import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";
import TodoList from "../../components/TodoList";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const todos = [
    {text: "Task 1", done: false},
    {text: "Task 2", done: false},
    {text: "Task 3", done: false},
    {text: "Task 4", done: true},
];

class MainScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>ToDo List App</Text>
                <TodoList todos={todos} />
                
                
            </View>
        )
    }
}

export default MainScreen;
 
