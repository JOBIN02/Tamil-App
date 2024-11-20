import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button  } from 'react-native';

export default function P13(){
  return(
    <View style={styles.container}>
      <View>
        <Text>Thai Pongal </Text>
    <Button title="P13"/>
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