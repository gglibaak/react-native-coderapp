import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useState } from "react";
import { AddItem, Title, TaskList } from "../components";
import { styles } from "./styles";

export const HomeScreen = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const onHandlerChange = (text) => {
    setTask(text);
  };

  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task,
      },
    ]);
    setTask("");
  };

  return (
    <View style={styles.container}>
      <Title title="Lista de Compras" />
      <AddItem
        buttonText="Agregar"
        onHandlerChange={onHandlerChange}
        onHandlerSubmit={onHandlerSubmit}
        placeholder="Añadir nuevo item"
        task={task}
      />

      <TaskList tasks={tasks} />

      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
