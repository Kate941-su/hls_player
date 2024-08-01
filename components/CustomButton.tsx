import { View, Text, Button } from "react-native";

// Both descriptions that are writtern below are valid.
// interface Props {
//   name: string
//   age: number
//   onClick: VoidFunction
// }

type Props = {
  name: string
  age: number
  onClick: VoidFunction
}

const CustomButton: React.FC<Props> = ({ name, age, onClick }) => {
  return (
    <View className="flex-1 items-center justify-start">
      <Text className="text-3xl">
        My name is {name}
      </Text>
      <Text>
        I'm {age} years old
      </Text>
      <Button
        onPress={(a) => {
          console.log("onPress pressssed.")
          onClick()
        }}
        title="Button"
        color="#841584"
      />
    </View>
  )
}

export { CustomButton }