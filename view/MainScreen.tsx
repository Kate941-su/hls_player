import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Platform, FlatList, TouchableHighlight, SafeAreaView, StatusBar } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import { FloatingActionButton, ListItem } from '../components/index'
import { ActivityIndicator, Appbar, IconButton } from 'react-native-paper'
import CustomAppbar from '../components/CustomAppbar'
import { FloatingAction } from 'react-native-floating-action'
import { RootStackparamlist } from '../Router'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import LiteM3U8Parser from '../parser/LiteM3U8Paerser'
import { Entry, Manifest } from '../parser'
import c, { testList } from '../assets/media/default_list'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import defaultPlaylist from '../assets/media/default_list'

const dummyList = Array.from(Array(10).keys())

type Props = NativeStackScreenProps<RootStackparamlist, 'MainScreen'>;

const MainScreen: React.FC<Props> = ({ navigation, route }) => {

  const parser = new LiteM3U8Parser()
  const [manifest, setManifest] = useState<Manifest>({ playlist: [] as Entry[] })
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    const initPlaylist = async () => {
      setIsLoading(true)
      const initManifest = await parser.parseAsync(defaultPlaylist)
      setManifest(initManifest)
    }
    initPlaylist()
    setIsLoading(false)
  }, [])
  if (isLoading) {
    return (
      <View style={styles.waitIndicatorContainer}>
        <ActivityIndicator size="large" />
      </View>)
  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <CustomAppbar
          leadingIcon='menu'
        />
        <FlatGrid
          itemDimension={Number.MAX_VALUE}
          contentContainerStyle={{ flexGrow: 1 }}
          data={manifest.playlist}
          renderItem={({ item, index }) =>
          (
            <ListItem
              onPress={() => {
                navigation.navigate("PlayerScreen", {
                  sumbnailURL: item.tvgLogo,
                  sourceURL: item.contentURL,
                  title: item.entryTitle ?? 'NoTitle',
                  subtitle: item.groupTitle ?? ''
                })
              }}
              title={item.entryTitle ?? 'No Title'}
              imageURI={item.tvgLogo}
              onTapStarButton={() => {
                // TODO: Debug
                parser.showAllEntries(manifest)
              }}
            />
          )}
          onEndReached={() => { }}
          onEndReachedThreshold={1}
        />
      </View>

      <FloatingActionButton
        onPressed={() => {
          navigation.navigate('RegisterScreen')
        }}
        size={48}
        icon='plus'
        color='white'
        backgroundColor='blue'
      />
    </View >
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  waitIndicatorContainer: {
    flex: 1,
    // width: '100%',
    // height: '100%',
    justifyContent: "center",
    // alignContent: "center"
  }
});