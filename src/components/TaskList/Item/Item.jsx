import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import CheckBox from "expo-checkbox";

const TaskItem = ({ item }) => {
  const [isSelected, setSelection] = useState(false);

  const onHandlerCheck = () => {
    isSelected == false ? setSelection(true) : setSelection(false);
  };

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={onHandlerCheck}
    >
      <Text style={styles.itemList}>{item.value}</Text>
      <CheckBox
        value={isSelected}
        style={styles.checkbox}
        color={isSelected ? "#27282D" : undefined}
      />
    </TouchableOpacity>
  );
};

export default TaskItem;
