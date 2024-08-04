import { View, Text, Image } from "react-native";
import ImageProvider from "../provider/imageProvider";

const PlacticeLayout = () => {
  return (
    <View className="flex-1">
      <View className="flex-row flex-1">
        <View className="flex-1 bg-blue-500 justify-center items-center">
          <Text className="text-white">left upper</Text>
        </View>
        <View className="flex-1 bg-red-500 justify-center items-center">
          <Text className="text-white">rigth upper</Text>
        </View>
      </View>
      <View className="flex flex-1">
        <View className="flex-1 bg-yellow-500 justify-center items-center">
          <Text className="text-white">left upper</Text>
        </View>
        <View className="flex-1 bg-purple-500 justify-center items-center">
          <Text className="text-white">rigth upper</Text>
        </View>
      </View>
      <View className="flex-row flex-1">
        <View className="flex-1 bg-green-500 justify-center items-center">
          <Text className="text-white">left lower</Text>
        </View>
        <View className="flex-1 bg-yellow-500 justify-center items-center">
          <Text className="text-black">right lower</Text>
        </View>
      </View>
      <View className="flex-row flex-1">
        <View className="flex-none w-10 bg-green-500 justify-center items-center">
          <Text className="text-white">left lower</Text>
        </View>
        <View className="flex grow bg-yellow-500 justify-center items-center">
          <Text className="text-black">right lower</Text>
        </View>
        <View className="flex-none w-10 bg-green-500 justify-center items-center">
          <Text className="text-white">left lower</Text>
        </View>
      </View>
    </View>
  )
}


const ImagePlacticeLayout = () => {
  return (
    <View className="flex-1">

      <View className="flex-row flex-1">
        <View className="flex-1">
          <Image
            source={ImageProvider.imgMountain1.imgObject}
            className="flex-none w-10"
          >
          </Image>
        </View>
        <View className="flex-1">
          <Image
            source={ImageProvider.imgMountain2.imgObject}
            className="flex-none w-90"
          >
          </Image>
        </View>
      </View>



      <View className="flex-row flex-1">
        <View className="flex flex-1">

        </View>
        <View className="flex flex-1">

        </View>
      </View>

    </View>
  )
}

export { PlacticeLayout, ImagePlacticeLayout }