import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

type MainpageNavigationProp = NativeStackNavigationProp<
{
  Main: undefined;
  Pongal: undefined;
  Pongal2: undefined;
  Pongal3: undefined;
  Pongal4: undefined;
  Pongal5: undefined;
  PongalWorshipGuideTamil: undefined;
  HowToMakePongalTamil: undefined;
 
}, 'Main'>;

export default function Mainpage() {
  const navigation = useNavigation<MainpageNavigationProp>();

  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/474x/b9/28/f8/b928f82803ff3d47cac8299b4b43ea0a.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <FontAwesome name="home" size={35} color="black" style={styles.icon} />
          <FontAwesome name="comment" size={35} color="black" style={styles.icon} />
          <FontAwesome name="star-half-o" size={35} color="black" style={styles.icon} />
          <FontAwesome name="share" size={35} color="black" style={styles.icon} />
          <FontAwesome name="bell" size={35} color="black" style={styles.icon} />
        </View>
        
        <View style={styles.remainingSpace}>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonSpace}>
              <Button title="பொங்கல் சிறப்புகள்" color="#4CAF50" onPress={() => navigation.navigate("Pongal")} />
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity  style={styles.button}>
                <Button title="சூரிய பொங்கல்" onPress={() => navigation.navigate("Pongal2")} color="#FF6347" />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="மாட்டு பொங்கல்" onPress={() => navigation.navigate("Pongal3")} color="#87CEEB" />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="உரியடி பொங்கல்" onPress={() => navigation.navigate("Pongal4")} color="#FFD700" />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="பொங்கல் வாழ்த்து மடல்" onPress={() => navigation.navigate("Pongal5")} color="darkblue" />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="வழிபடும் முறை" onPress={() => navigation.navigate("PongalWorshipGuideTamil")} color="#F28D8D" />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="பொங்கல் செய்முறை" onPress={() => navigation.navigate("HowToMakePongalTamil")} color="#8A2BE2" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Ensures the image covers the whole screen
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: 'transparent', // Ensures the background image is visible
  },
  buttonContainer: {
    padding: 40,
  },
  buttonSpace: {
    marginBottom: 40,
    width: 250,
    borderRadius: 1000,
  },
  button: {
    borderRadius: 500,
  },
  icon: {
    marginHorizontal: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 15,
    marginBottom: 1,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  remainingSpace: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: 'transparent',
  },
});
