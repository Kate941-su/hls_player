import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconButton } from './IconButton'
import Entypo from 'react-native-vector-icons/Entypo'

type Props = {
  title: string,
  subTitle: string,
  onTapEditButton: VoidFunction,
  onTapTrashButton: VoidFunction
}


const ListItem: React.FC<Props> = ({
  title,
  subTitle,
  onTapEditButton,
  onTapTrashButton
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <View style={styles.iconContainer}>
        <IconButton
          style={styles.iconButton}
          onPress={() => { console.log('Edit Tapped') }}>
          <Entypo name={"pencil"} size={24} />
        </IconButton>

        <IconButton
          style={styles.iconButton}
          onPress={() => { console.log('Trash Tapped') }}>
          <Entypo name={"trash"} size={24} />
        </IconButton>
      </View>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'grey',
    padding: 8,
    width: '100%'
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  iconButton: {
    paddingHorizontal: 8
  },

  textContainer: {
    flexDirection: 'column'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 16,
    color: 'grey'
  }
})