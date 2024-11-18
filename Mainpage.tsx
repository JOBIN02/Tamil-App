import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

type MainpageNavigationProp = NativeStackNavigationProp<{
  Main: undefined;   // No params for Main screen
  Pongal: undefined;  // No params for Login screen
}, 'Main'>;


export default function Mainpage() {
  const navigation = useNavigation<MainpageNavigationProp>();
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        
        <FontAwesome name="home" size={35} color="#4CAF50" style={styles.icon} />
        <FontAwesome name="comment" size={35} color="#4CAF50" style={styles.icon} />
        <FontAwesome name="star-half-o" size={35} color="#4CAF50" style={styles.icon} />
        <FontAwesome name="share" size={35} color="#4CAF50" style={styles.icon} />
        <FontAwesome name="bell" size={35} color="#4CAF50" style={styles.icon} />
        
        </View>
      
      
      <View style={styles.remainingSpace}>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonSpace}>
        <Button title="பொங்கல் சிறப்புகள்" color="#4CAF50" onPress={() => navigation.navigate("Pongal")} />

        </View>
        <View style={styles.buttonSpace}>
          <TouchableOpacity style={styles.button}>
          <Button title="சூரிய பொங்கல்" color="#FF6347" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonSpace}>
        <TouchableOpacity style={styles.button}>
          <Button title="மாட்டு பொங்கல்" color="#87CEEB" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonSpace}>
        <TouchableOpacity style={styles.button}>
          <Button title="உரியடி பொங்கல்" color="#FFD700" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonSpace}>
        <TouchableOpacity style={styles.button}>
          <Button title="பொங்கல் வாழ்த்து மடல்" color="#E6E6FA" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonSpace}> 
          <TouchableOpacity style={styles.button}>
          <Button title="வழிபடும் முறை" color="#F28D8D" />
          </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}> 
          <TouchableOpacity style={styles.button}>
          <Button title="பொங்கல் செய்முறை" color="#8A2BE2" />
          </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 90,
    paddingHorizontal: 20,
    
    alignItems: 'center',
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
  icon: {
    marginHorizontal: 15,

  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingVertical: 15,
    marginBottom: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
    
     
  },
  remainingSpace: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 25,
  },
  
  iconWrapper: {
    backgroundColor: '#111', 
    padding: 25, 
    borderRadius: 50, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }

  
});        