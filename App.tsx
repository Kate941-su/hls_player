import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import RootView from './view/RootView';

export default function App() {
  return (
    <TailwindProvider>
      <View className='flex-1 justify-center items-center bg-blue-500'>
        <Text className='text-red-500'>HelloWorld</Text>
        <RootView></RootView>
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  );
}