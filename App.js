import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
		  <Image style={styles.foto} souce={{uri:'https://static.poder360.com.br/2023/01/Lula-Velorio-Pele-3jan2023-848x477.jpg',}}/>
      <Text style= {styles.titulo}>TEXTAO NO TWITTER</Text>
	<View style={styles.bloco}>
		<Text style={styles.label}>Nome:</Text>
		<TextInput 
			style={styles.input}
			/>
		  </View>	  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff' ,
    alignItems: 'center',
    justifyContent: 'center',
  },
	input:{
	borderWidth: 1,
	},
	foto:{
		width: 200,
		height: 300,
		
	},
});
