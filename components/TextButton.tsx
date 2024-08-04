import { View, Text, Pressable } from 'react-native'
import React from 'react'
import tailwind from 'tailwindcss-react-native';


type Props = {
  onPress: VoidFunction,
  title: string,
  textStyle?: string,
  buttonStyle?: string,
}


const TextButton: React.FC<Props> = ({
  title,
  onPress,
  textStyle = 'font-bold text-white',
  buttonStyle = '',
}) => {

  return (
    <Pressable
      onPress={() => { onPress() }}
      className={buttonStyle}>
      <Text className={textStyle}>{title}</Text>
    </Pressable>
  )
}

export default TextButton