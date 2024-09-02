import { Image, ImageComponent, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackparamlist } from '../Router'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Appbar } from 'react-native-paper';
import { IconButton } from '../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

type Props = NativeStackScreenProps<RootStackparamlist, 'PlayerScreen'>;

const PlayerScreen: React.FC<Props> = ({ navigation, route }) => {

  const { sumbnailURL, sourceURL, title, subtitle } = route.params
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Action icon="arrow-left" onPress={() => {
          navigation.navigate('MainScreen')
        }} />
        {/* <Appbar.Content title={route.params.title}></Appbar.Content> */}
      </Appbar.Header>
      <View style={styles.bodyContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.imageBox}>
            <Image
              style={styles.image}
              source={{
                uri: sumbnailURL
              }
                //   (route.params.sourceURL != undefined || route.params.sourceURL == "") ? {
                //   uri: 'https://reactnative.dev/img/tiny_logo.png',
                // } :
                //   require('../assets/images/noimage.png')
              }
            />
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text>
            {subtitle}
          </Text>
        </View>
        <View style={styles.panelContainer}>
          <IconButton
            onPress={() => { }}>
            <FontAwesome name={"star-o"} size={32} />
          </IconButton>
          <View style={{ padding: 32 }} ></View>
          <IconButton
            onPress={() => { }}>
            <FontAwesome name={"play"} size={32} />
          </IconButton>
          <View style={{ padding: 32 }} ></View>
          <IconButton
            onPress={() => { }}>
            <FontAwesome name={"share-alt"} size={32} />
          </IconButton>
        </View>
      </View>
    </View>
  )
}

export default PlayerScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00ffff',
    flex: 1
  },
  appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBox: {
    borderRadius: 16,
    width: 300,
    height: 300,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    flex: 0,
    textAlign: 'left',
    height: '10%'
  },
  title: {
    fontSize: 24
  },
  panelContainer: {
    paddingTop: 24,
    height: '25%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})