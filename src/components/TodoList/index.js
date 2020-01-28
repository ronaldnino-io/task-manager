import React, {Fragment} from "react";
import { Text, TouchableOpacity, View, StyleSheet, TouchableHighlight, ScrollView } from "react-native";


const styles = StyleSheet.create({
    container:{
        width: "100%"
    },
    listItem:{
        borderWidth: 1,
        margin: 5,
        width: "80%",
        flexDirection: 'row',
        alignItems: 'center'
    },
    text:{
        flex: 1,
        padding: 5,
        fontWeight: 'bold'
    },
    bullet:{
        padding: 5,
        fontWeight: 'bold'
    },
    textDone:{
        color: "#aaa",
        textDecorationLine: "line-through",
        fontWeight: 'normal'
    },
    delete:{
        width: 44,
        height: 44,
        alignItems: "center",
        justifyContent: "center"
    },
    deleteText:{
        color: "#ff0000",
        fontSize: 18
    }

});

const TodoList = ({ todos, onUpdate, onDelete }) => (
    <ScrollView contentContainerStyle={styles.container}>
        {
            todos.map(
                todo =>  (
                    <TouchableOpacity  style={styles.listItem} key={todo.text} onPress={()=>onUpdate({...todo, done: !todo.done})}>
                     <Text style={styles.bullet}>-</Text>   
                     <Text 
                       style={[styles.text, todo.done &&  styles.textDone]} 
                    >
                       {todo.text}
                    </Text>
                    <TouchableOpacity style={styles.delete} >    
                        <Text style={styles.deleteText} onPress={()=>onDelete(todo)} >x</Text>   
                    </TouchableOpacity>    
                    </TouchableOpacity>    
                )
            )
        }
    </ScrollView>
);

export default TodoList;
