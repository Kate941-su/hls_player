import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle
} from 'react-native'
import React from 'react'


type Props = {
  onPress: VoidFunction,
  name: string,
  textStyle?: StyleProp<TextStyle>,
  buttonStyle?: StyleProp<ViewStyle>,
}


const TextButton: React.FC<Props> = ({
  name,
  onPress,
  textStyle,
  buttonStyle,
}) => {

  return (
    <View>
      <Pressable
        onPress={onPress}
        style={[buttonStyle]}>
        <Text style={[textStyle]}>{name}</Text>
      </Pressable>
    </View>
  )
}

export default TextButton

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});