import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from 'react';
import { CustomButton } from "../components/CustomButton";


const RootView = () => {

  useEffect(() => {
    console.debug("Build up in this timing")
    return () => {
      console.debug("Cleanup on component")
    }
  }, []);

  return (
    <View className="flex-1 items-center justify-start">
      <Text className="text-3xl">
        aaaaaaa
      </Text>
      <CustomButton
        onClick={() => { console.log("Hello World") }}
        name="Kaito Kitaya"
        age={26}
      ></CustomButton>
    </View>
  )
}

export default RootView