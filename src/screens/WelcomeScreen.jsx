import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import React from "react";
import { Title } from "../components";

const WelcomeScreen = (prop) => {
  const PlaceHolderImage = require("../../assets/welcomescreen.png");

  const onPress = () => {
    prop.onHandlerListening(true);
  };

  return (
    <View style={styles.container}>
      <Image source={PlaceHolderImage} style={styles.image} />
      <Title title="Coder BuyList" />

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.textButton}> Comenzar </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
