import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

const AboutUs = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View>
      <Text>about us</Text>
    </View>
  );
};

export default AboutUs;
