import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RootStackparamlist } from '../Router'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Appbar } from 'react-native-paper';
import TextButton from '../components/TextButton';
import LiteM3U8Parser from '../parser/LiteM3U8Paerser';
import defaultPlaylist from '../assets/media/default_list';

type Props = NativeStackScreenProps<RootStackparamlist, 'RegisterScreen'>;

const RegisterScreen: React.FC<Props> = ({ navigation, route }) => {

  const [url, onChangeURL] = useState('')
  const [alias, onChangeAlias] = useState('')
  const liteParser = new LiteM3U8Parser()

  useEffect(() => {
  }, [])

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Action icon="arrow-left" onPress={() => {
          navigation.navigate('MainScreen')
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
        <View style={{ alignItems: 'center' }}>
          <TextButton
            name='Register'
            textStyle={styles.textButtonStyle}
            buttonStyle={styles.buttonStyle}
            onPress={() => {
              console.log('🚢')
            }}
          />

          <TextButton
            name='Parse'
            textStyle={styles.textButtonStyle}
            buttonStyle={styles.buttonStyle}
            onPress={() => {
              const manifest = liteParser.parse(defaultPlaylist)
              liteParser.showAllEntries(manifest)
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  body: {
    flex: 1,
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
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: 'blue',
    width: 100,
    height: 50,
    justifyContent: 'center',
    borderRadius: 12
  },
  textButtonStyle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18
  }
})