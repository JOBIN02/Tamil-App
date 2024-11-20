import { StyleSheet, Image, View } from "react-native";

export default function Pongal2() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://media.tenor.com/Lp5atHS2AkAAAAAM/happy-pongal-happy-pongalo-pongal.gif", // Direct link to the GIF
        }}
        style={styles.gif}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  gif: {
    width: "100%", // Full width of the screen
    height: "100%", // Full height of the screen
    resizeMode: "cover", // Ensures the GIF scales properly
  },
});
