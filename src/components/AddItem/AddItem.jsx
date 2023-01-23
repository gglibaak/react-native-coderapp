import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './styles'

const AddItem = ({ 
    placeholder, 
    task, 
    onHandlerChange, 
    buttonText, 
    onHandlerSubmit
}) => {
    return (
        <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder={placeholder}
          autoComplete='off'
          autoCorrect={false}
          autoCapitalize='none'
          value={task}
          onChangeText={onHandlerChange}
          placeholderTextColor= '#BEBEBE'
        />
        <Button disabled={!task} title={buttonText} color='#E0F676' onPress={onHandlerSubmit} />
      </View>
    )
}

export default AddItem;