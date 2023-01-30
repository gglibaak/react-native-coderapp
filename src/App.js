import { useFonts} from 'expo-font';
import HomeScreen from './screens/HomeScreen';
import React, { useState } from "react";
import WelcomeScreen from './screens/WelcomeScreen';
import {ActivityIndicator, View } from 'react-native';
import { styles } from '../src/screens/styles'

export default function App() {
  const [task, setTask] = useState(false)
  const [loaded] = useFonts({
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
    "Inter-ExtraBold": require("../assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("../assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Thin": require("../assets/fonts/Inter-Thin.ttf"),
    });

  if (!loaded) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size='large' color={'#E0F676'}/>
      </View>
    )
  }

  const onHandlerListening = e => setTask(e)
    
  const Page = () => ( 
     task   ?   <HomeScreen />  : <WelcomeScreen onHandlerListening={onHandlerListening} /> 
  )
  return (   
      <Page />    
  );
}


