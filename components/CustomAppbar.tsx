import { StyleSheet, Text, View } from 'react-native'
import { Appbar, Title } from 'react-native-paper'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// type ReactNativeVectorIcons = Octicons | MaterialIcons

type Props = {
  leadingIcon: string,
  title?: string,
  actions?: React.ReactNode[]
}

const CustomAppbar: React.FC<Props> = ({
  leadingIcon,
  title,
  actions
}) => {
  return (
    <Appbar.Header style={styles.container}>
      <Appbar.Action icon="menu" onPress={() => { }} />
      {title != null ?
        <Appbar.Content
          title={title!}
        /> : <></>
      }
    </Appbar.Header>
  )
}

export default CustomAppbar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8
  },
  hidden: {
    opacity: 0, // コンポーネントを非表示にするが、空間は確保
    position: 'absolute', // 必要に応じて位置を調整
  },
})