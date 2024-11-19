import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type frontpageNavigationProp = NativeStackNavigationProp<{
  front: undefined;   // No params for Main screen
  Login: undefined;  // No params for Login screen
}, 'front'>;


export default function frontpage() {
  const navigation = useNavigation<frontpageNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SG60 Sakthi Blaze</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFDF22", 
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "FFDF22", 
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "white", 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "#FFDF22", 
    fontSize: 18,
    fontWeight: "600",
  },
});
