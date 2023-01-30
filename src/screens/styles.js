
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#27282D',
      paddingTop: 40,      
    },
    loader: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#27282D"
    },
    image: {
      width: '100%',
      height: 440,     
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      marginHorizontal: 25,
      marginVertical:50,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#E0F676',
    },
    textButton: {
      fontFamily: 'Inter-Bold'
    }
});