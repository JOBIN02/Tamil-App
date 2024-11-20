import { StyleSheet, Image, View } from "react-native";

export default function Pongal4() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://media.tenor.com/gzHesJhiRcsAAAAM/happy-pongal.gif.gif", // Direct link to the GIF
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
