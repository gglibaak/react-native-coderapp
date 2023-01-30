import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from "./styles";

export default function Title( {title} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}



