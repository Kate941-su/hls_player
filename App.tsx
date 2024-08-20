import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Provider } from 'react-redux'
import { store } from './app/store'
import { Counter, MainScreen } from './view/index';

export default function App() {
  return (
    <Provider store={store}>
      <TailwindProvider>
        <StatusBar barStyle="default" />
        <SafeAreaView style={{ flex: 1 }}>
          <MainScreen />
        </SafeAreaView>
      </TailwindProvider>
    </Provider>
  );
}