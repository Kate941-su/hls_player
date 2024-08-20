import { StyleSheet, Text, View, Platform, FlatList, TouchableHighlight, SafeAreaView } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import { ListItem } from '../components/index'
import React from 'react'

const dummyList = Array.from(Array(10).keys())

const MainScreen: React.FC = () => {
  return (
    <View style={styles.container}>
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
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dummy: {
    height: Platform.OS === 'ios' ? 100 : 200
  }
});