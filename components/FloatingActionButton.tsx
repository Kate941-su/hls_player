import { ColorValue, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconButton } from './IconButton'
import Octicons from 'react-native-vector-icons/Octicons'
type Props = {
  onPressed: VoidFunction
  icon: string
  size: number
  color: ColorValue
  backgroundColor: string
}

const FloatingActionButton: React.FC<Props> = ({ onPressed, icon, size, color = '#ffffff', backgroundColor }) => {
  return (
    <IconButton
      onPress={onPressed}
      style={[{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
        position: 'absolute',
        right: 10,
        bottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
      }]}>
      <Octicons
        style={{ color: color }}
        name='plus'
        size={32}
      />
    </IconButton>
  )
}

export default FloatingActionButton
