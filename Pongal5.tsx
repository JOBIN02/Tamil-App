import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button  } from 'react-native';

export default function Pongal5(){
  return(
    <View style={styles.container}>
      <View>
        <Text>pongal vaazhthu madal </Text>
    <Button title="Pongal5"/>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 2,
    justifyContent: 'center',
     alignContent: 'center',
  }
})