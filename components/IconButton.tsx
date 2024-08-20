import { View, Text, Pressable, StyleProp, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import React from 'react'

type Props = {
  style?: StyleProp<ViewStyle> | undefined;
  children: React.ReactNode;
  onPress: VoidFunction,
}


const IconButton: React.FC<Props> = ({
  style,
  children,
  onPress,
}) => {
  return (
    <View style={style}>
      <Pressable onPress={() => { onPress() }}>
        {children}
      </Pressable>
    </View>
  )
}

export { IconButton }