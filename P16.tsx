import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button  } from 'react-native';

export default function P16(){
  return(
    <View style={styles.container}>
      <View>
        <Text>Jallikattu </Text>
    <Button title="P16"/>
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