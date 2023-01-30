import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#E0F676',
        marginBottom: 10,
        borderRadius: 10,
      },
      itemList: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Inter-Medium'
      },
      checkbox: {
        alignSelf: 'center',
      }
})