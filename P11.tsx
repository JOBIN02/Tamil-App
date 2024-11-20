import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button  } from 'react-native';

export default function P11(){
  return(
    <View style={styles.container}>
      <View>
        <Text>Pongal sirapugal</Text>
    <Button title="P11"/>
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