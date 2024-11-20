import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button  } from 'react-native';

export default function P12(){
  return(
    <View style={styles.container}>
      <View>
        <Text>bogi</Text>
    <Button title="P12"/>
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