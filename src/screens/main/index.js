import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet, TextInput, Button, View } from "react-native";
import TodoList from "../../components/TodoList";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../../data/todos";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
    alignItems: "center"
  },
  addRow:{
      flexDirection: "row",
      width: "80%"
  },
  title: {
    fontWeight: "bold",
    fontSize: 20
  },
  text: {
    flex:1,
    borderBottomWidth: 1,
    padding: 5
  }
});

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: null
    };
    console.info(getTodos());
  }

  componentDidMount = () => {
    this.setState({ todos: getTodos() });
  };

  handleAdd = () => {
      const {todos, newTodo} = this.state;
      const newList = addTodo(todos, {text: newTodo})
      this.setState({todos:newList, newTodo:null})
      console.info(this.state)

  }

  handleUpdate =  todo => {
      const {todos} = this.state;
      const newList = updateTodo(todos, todo);
      this.setState({todos:newList});
  }

  handleDelete=  todo => {
    const {todos} = this.state;
    const newList = deleteTodo(todos, todo);
    this.setState({todos:newList});
}

  render() {
    const { todos, newTodo } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>ToDo List App</Text>
        <View style={styles.addRow}>
            <TextInput 
                value={newTodo}
                onChangeText={todo => this.setState({newTodo: todo})}
                placeholder="Nueva tarea"
                autoCapitalize="words"
                clearButtonMode="always"
                returnKeyType="done"
                style={styles.text} 

            
            />
            <Button title="Añadir" onPress={this.handleAdd}/>
        </View>
        <TodoList 
            todos={todos} 
            onUpdate={this.handleUpdate}
            onDelete={this.handleDelete}
        />
      </SafeAreaView>
    );
  }
}

export default MainScreen;
