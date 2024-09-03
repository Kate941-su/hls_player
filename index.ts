import { AppRegistry } from "react-native";
import TrackPlayer from "react-native-track-player";
import { expo } from "./app.json";
import App from "./App";

AppRegistry.registerComponent(expo.name, () => App);

TrackPlayer.registerPlaybackService(() => {
  console.log("registered");
  return require("./trackPlayer/playerService");
});

TrackPlayer.setupPlayer()
  .then(() => {
    console.log(`Music Player is succeeded to launch`);
  })
  .catch((e) => {
    console.log(`Music Player is failed to launch because ${e}`);
  });
