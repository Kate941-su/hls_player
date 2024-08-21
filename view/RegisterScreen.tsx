import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackparamlist } from '../Router'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import CustomAppbar from '../components/CustomAppbar';
import { Appbar } from 'react-native-paper';


type Props = NativeStackScreenProps<RootStackparamlist, 'MainScreen'>;

const RegisterScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={styles.container}>
        <Appbar.Action icon="arrow-left" onPress={() => {
          navigation.goBack()
        }} />
      </Appbar.Header>
      <Text>RegisterScreen</Text>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8
  },

})