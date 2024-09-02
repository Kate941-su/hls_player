import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { IconButton } from './IconButton'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


type Props = {
  title: string,
  subTitle?: string,
  imageURI?: string,
  onTapStarButton: VoidFunction,
  onPress: VoidFunction,
}


const ListItem: React.FC<Props> = ({
  title,
  subTitle,
  imageURI,
  onTapStarButton,
  onPress,
}) => {
  return (
    <Pressable onPress={() => onPress()}      >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={(imageURI != undefined || imageURI == "") ? {
              uri: imageURI,
            } :
              require('../assets/images/noimage.png')
            }
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle != null ? subTitle : ''}</Text>
        </View>
        <View style={styles.iconContainer}>
          <IconButton
            style={styles.iconButton}
            onPress={() => { onTapStarButton() }}>
            <FontAwesome name={"star-o"} size={24} />
          </IconButton>
        </View>
      </View >
    </Pressable>
  )
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: "center",
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'grey',
    padding: 8,
    width: '100%',
    height: 100,
  },
  imageContainer: {
    width: 75,
    height: 75,
    backgroundColor: "#ff00ff",
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: "100%"
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconButton: {
    paddingHorizontal: 8
  },

  textContainer: {
    flexDirection: 'column',
    width: '60%',
    height: "100%"
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 16,
    color: 'grey'
  }
})