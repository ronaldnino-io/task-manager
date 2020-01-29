import React, { Fragment } from "react";

import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SectionList,
  Image
} from "react-native";
import iconCheck from "./assets/check.png";
import iconDelete from "./assets/delete.png"


const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  contentContainer: {
    flexGrow: 1
  },
  listItem: {
    margin: 5,
    padding: 5,
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  bullet: {
    width: "10%"
  },
  text: {
    flex: 1,
    padding: 5,
    fontWeight: "bold"
  },
  textDone: {
    color: "#aaa",
    textDecorationLine: "line-through",
    fontWeight: "normal"
  },
  delete: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center"
  },
  deleteText: {
    color: "#ff0000",
    fontSize: 18
  },
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  separator: {
    height: 1,
    width: "86%",
    backgroundColor: "#CED0CE",
    marginLeft: "14%"
  }, 
  sectionHedear:{
      backgroundColor: "#ddd",
      padding: 10
  },
  emptyImage:{
      width: 50,
      height: 50,
      tintColor: "#005500"
  },
  icon: {
      width: 20,
      height: 20
  }
});


const TodoList = ({ todos, onUpdate, onDelete }) => {
  const renderItem = todo => (
    <TouchableOpacity
      style={styles.listItem}
      key={todo.text}
      onPress={() => onUpdate({ ...todo, done: !todo.done })}
    >
      <Text style={styles.bullet}>-</Text>
      <Text style={[styles.text, todo.done && styles.textDone]}>
        {todo.text}
      </Text>
      <TouchableOpacity style={styles.delete} onPress={() => onDelete(todo)}>
      <Image style={styles.icon} source={iconDelete}  />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderEmptyComponent = () => (
    <View style={styles.emptyList}>
        <Image style={styles.emptyImage} source={iconCheck}></Image>
      <Text>Lista Vacia</Text>
    </View>
  );

  const renderSeparatior = () => {
    return <View style={styles.separator} />;
  };

  
  const renderSectionHeader = ({section: {title, data} }) => (
    
    <View style={styles.sectionHedear} >
        <Text>
            {title} ({data.length})
        </Text>
    </View>
  );

  return (
    <SectionList
      style={styles.container}
      sections={
          todos && todos.length
          ? [
            {title:'ToDo', data: todos.filter(todo=> !todo.done)},
            {title:'Terminadas', data: todos.filter(todo=> todo.done)}
            ]
          :[]
        }
      renderItem={({ item }) => <Text>{item.text}</Text>}
      keyExtractor={todo => todo.id}
      renderItem={({ item }) => renderItem(item)}
      renderSectionHeader={renderSectionHeader}
      ItemSeparatorComponent={renderSeparatior}
      ListEmptyComponent={renderEmptyComponent}
      stickySectionHeadersEnabled={true}
    />
  );
};

export default TodoList;
