import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  View,
  ActivityIndicator,
  Alert
} from "react-native";
import TodoList from "../../components/TodoList";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../../data/todos";
import AddTodo from "../../components/AddTodo"; 
import FAB from "../../components/FAB";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
    alignItems: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 20
  },
  loading: {
    flex: 1
  }
});

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: null,
      loading: true,
      addModalVisible: false
    };
  }

  componentDidMount = async () => {
    const todos = await getTodos();
    this.setState({ todos: todos, loading: false });
  };

  handleAdd = newTodo => {
    const { todos } = this.state;
    const newList = addTodo(todos,  newTodo);
    this.setState({ todos: newList, newTodo: null });
    console.info(this.state);
  };

  handleUpdate = todo => {
    const { todos } = this.state;
    const newList = updateTodo(todos, todo);
    this.setState({ todos: newList });
  };

  handleDelete = todo => {
    Alert.alert("Quieres eliminar la tarea?", todo.text, [
      {
        text: "Cancelar",
        style: "cancel"
      },
      {
        text: "OK",
        onPress: () => {
          const { todos } = this.state;
          const newList = deleteTodo(todos, todo);
          this.setState({ todos: newList });
        }
      }
    ]);
  };
  toggleModal = () => {
    this.setState({addModalVisible: !this.state.addModalVisible})
  }

  render() {
    const { todos, newTodo, loading, addModalVisible } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>ToDo List App</Text>
       
        {loading && (
          <ActivityIndicator size="large" color="blue" style={styles.loading} />
        )}
        {!loading && (
          <TodoList
            todos={todos}
            onUpdate={this.handleUpdate}
            onDelete={this.handleDelete}
          />
        )}
        <FAB 
          text="+"
          fabStyle={{backgroundColor:"#0066ff"}}
          textStyle={{color: "#fff"}}
          onPress={this.toggleModal}
        />
       <AddTodo 
          visible={addModalVisible}
          onCloseModal={this.toggleModal}
          onAddTodo={this.handleAdd}
       />   
      </SafeAreaView>
    );
  }
}

export default MainScreen;
