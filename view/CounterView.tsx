import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const useCounter = (init: number) => {
  const [count, setCount] = useState(init)

  const increment = () => setCount(count + 1)

  return { count, increment }

}


const CounterView: React.FC = () => {

  const { count, increment } = useCounter(0)

  return (
    <View className='flex-1 justify-center items-center'>
      <Pressable onTouchStart={increment}>
        <Text>increment</Text>
      </Pressable>
      
      <Text>Count is {count}</Text>
    </View>
  )
}

export default CounterView