import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import RootView from './view/RootView';
import { Provider } from 'react-redux'
import { store } from './app/store'
import { Counter } from './view/Counter';
import { PlacticeLayout } from './components/PractiveLayout';

export default function App() {
  return (
    <Provider store={store}>
      <TailwindProvider>
        {/* <PlacticeLayout>
        </PlacticeLayout> */}
        <Counter></Counter>
        <StatusBar style="auto" />
      </TailwindProvider>
    </Provider>
  );
}