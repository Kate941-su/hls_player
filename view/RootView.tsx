import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from 'react';


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
    </View>
  )
}

export default RootView