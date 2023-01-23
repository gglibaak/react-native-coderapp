import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddItem from './src/components/AddItem/AddItem';
import Titulo from './src/components/Title/Title';
import TaskList from './src/components/TaskList/TaskList';



export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const onHandlerChange = (text) => {
    setTask(text)
  }

  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task
      }
    ]);
    setTask('');
  }

  return (
    
    <View style={styles.container}>
      <Titulo 
        title= 'Lista de Compras'
      />
      <AddItem 
        buttonText='Agregar'
        onHandlerChange={ onHandlerChange } 
        onHandlerSubmit={ onHandlerSubmit }
        placeholder='Añadir nuevo item'
        task={task}
      />

      <TaskList 
        tasks={tasks}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27282D',
    paddingTop: 40,
  },
  
});
