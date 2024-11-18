import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native';

export default function Pongalsirapu() {
  return (
    // ImageBackground component to set the background image using the direct image URL
    <ImageBackground 
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOCX88403JkQj4n_4uCGuACIuhNDo3xPdHQ&s' }}  // Same image URL as the first code
      style={styles.container}
    >
      <View style={styles.remainingSpace}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="பொங்கல் சிறப்புகள்" color="#4CAF50" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="போகி" color="#FF6347" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="தை பொங்கல்" color="#87CEEB" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="மாட்டுப் பொங்கல்" color="#FFD700" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="காணும் பொங்கல்" color="#E6E6FA" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}> 
            <TouchableOpacity style={styles.button}>
              <Button title="ஜல்லிக்கட்டு" color="#F28D8D" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 90,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center', // Ensures content is centered vertically and horizontally
  },
  buttonContainer: {
    padding: 80, 
  },
  buttonSpace: {
    marginBottom: 40,
    width: 250,
    borderRadius: 1000,
  },
  button: {
    borderRadius: 500,
  },
  remainingSpace: {
    paddingHorizontal: 25,
  },
});
