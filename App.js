import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import { useDimensions } from "@react-native-community/hooks";
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
	console.log("App executed");

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: "Welcome" }} />
				<Stack.Screen name="Home" component={HomeScreen} />
			</Stack.Navigator>
			{/* <View style={styles.container}>

			</View> */}
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
