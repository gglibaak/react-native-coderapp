import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from "react-native";
import TaskItem from './Item/Item';
import { styles } from "./styles";

 const TaskList = ({ tasks}) => {

const renderItem = ({ item }) => (
    <TaskItem 
        item={item}
    />
)

const keyExtractor = (item) => item.id;

  return (
    <FlatList 
        data={tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
  )
}

export default TaskList;