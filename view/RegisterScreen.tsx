import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { RootStackparamlist } from '../Router'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import CustomAppbar from '../components/CustomAppbar';
import { Appbar } from 'react-native-paper';


type Props = NativeStackScreenProps<RootStackparamlist, 'MainScreen'>;

const RegisterScreen: React.FC<Props> = ({ navigation, route }) => {

  const [url, onChangeURL] = useState('')
  const [alias, onChangeAlias] = useState('')

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Action icon="arrow-left" onPress={() => {
          navigation.goBack()
        }} />
      </Appbar.Header>
      <View style={styles.body}>
        <Text
          style={styles.title}
        >URL</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeURL}
          value={url}
          placeholder='input url'
        />
        <Text
          style={styles.title}
        >Name(alias)</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeAlias}
          value={alias}
          placeholder="input name"
        />
      </View>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    padding: 8
  },
  appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})