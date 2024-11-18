// index.tsx
import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function signuppage() {
  const [password, setPassword] = useState('');
  const handleSignUp = () => {
    if (password.length < 8) {
      Alert.alert('Password Error', 'Password must be at least 8 characters long.');
    } else {
      // Proceed with sign-up process (e.g., API call)
      Alert.alert('Success', 'Sign Up Successful!');
    }
  };

  return (
    <View style={styles.backgroundcontainer}>
      <View style={styles.container}>
        <TextInput style={styles.textinput} 
          placeholder="Name"/>
        <TextInput style={styles.textinput} 
          placeholder="Username"/>
        <TextInput style={styles.textinput} 
          placeholder="Email" 
          keyboardType="email-address" 
          autoCapitalize="none" 
          autoCorrect={false}/>
        <TextInput style={styles.textinput} 
          placeholder="Password" 
          secureTextEntry={true} 
          accessibilityLabel="Password Input"
          value={password}
          onChangeText={setPassword}/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        
      </View>
      <StatusBar style="auto" />
    </View>
      
    
    
  );
}

const styles = StyleSheet.create({

  backgroundcontainer:{
    backgroundColor: '#ffea54',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  
  container
    : {
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    },
   
  textinput: {
    width: 250,
    paddingVertical: 8,
    paddingLeft: 7,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    
    borderRadius: 4,
    backgroundColor: '#f5f5f5',
    borderColor: '#bdbdbd',

  },

  buttonText: {
    paddingVertical: 15,
    color:'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  button: {
  
    borderRadius: 4,
    backgroundColor: '#393e46',
    width: 250,
    paddingHorizontal: 5,
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: 0, 
    borderColor: '#0056b3',
    marginBottom: 20,
  },

  signupcontainer: {
    justifyContent: 'center',
    fontWeight: 'bold',
    color:'#393e46',
    fontSize: 16,
    marginTop: 5,

  }


 

  
});