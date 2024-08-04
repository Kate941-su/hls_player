import { useState } from 'react'
import { Button, Pressable, StyleSheet, Text, View, TextInput } from "react-native";
// Use pre-typed versions of the React-Redux
// `useDispatch` and `useSelector` hooks
import { useAppDispatch, useAppSelector } from '../app/hooks'
import StyleProducer from '../style/styleProducer';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
  selectStatus
} from '../slicers/counter/counterSlice'
import { IconButton } from '../components/IconButton';
import TextButton from '../components/TextButton';

const Counter: React.FC = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const status = useAppSelector(selectStatus)
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

  return (
    <View className='flex-1 justify-center items-center'>
      <View className='p-5'>
        <Text>Count is {count}</Text>
      </View>

      <View className='flex-row'>
        <IconButton
          onPress={() => { console.log('increment') }}
          size={24}
          iconName='text-decrease'
          color='black'>
        </IconButton>
        <View className='flex-none w-10'></View>
        <IconButton
          onPress={() => { console.log('increment') }}
          size={24}
          iconName='text-increase'
          color='black'>
        </IconButton>
      </View>

      <TextInput
        className='h-8 m-4 border border-gray-300 p-2'
        placeholder='Num'
        keyboardType='numeric'
        value={incrementAmount}
      ></TextInput>

      <TextButton
        onPress={() => {
          console.log('TextButton tapped!')
        }}
        title='TextButton'
        textStyle='font-thin text-white'
        buttonStyle='bg-green-500 p-2 rounded-md'
      >

      </TextButton>

    </View>
  )
}

export { Counter }