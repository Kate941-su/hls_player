import React from 'react'
import { StyleSheet, Text, View, Platform, FlatList, TouchableHighlight, SafeAreaView, StatusBar } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import { CircleButton, ListItem } from '../components/index'
import { Appbar, IconButton } from 'react-native-paper'
import CustomAppbar from '../components/CustomAppbar'
import { FloatingAction } from 'react-native-floating-action'
import { RootStackparamlist } from '../Router'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

FloatingAction

const dummyList = Array.from(Array(10).keys())

type Props = NativeStackScreenProps<RootStackparamlist, 'MainScreen'>;

const MainScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <CustomAppbar
          leadingIcon='menu'
        />
        <FlatGrid
          itemDimension={Number.MAX_VALUE}
          contentContainerStyle={{ flexGrow: 1 }}
          data={dummyList}
          renderItem={({ item }) => (
            <ListItem
              title={'Hello'}
              subTitle={`${item}`}
              onTapEditButton={() => { }}
              onTapTrashButton={() => { }}
            />
          )}
          keyExtractor={item => item.toString()}
          onEndReached={() => { }}
          onEndReachedThreshold={1}
        />
      </View>

      <CircleButton
        onPressed={() => { }}
        size={48}
        icon='plus'
        color='white'
        backgroundColor='blue'
      />
    </View>

  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});