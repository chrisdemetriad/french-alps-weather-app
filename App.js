import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useDimensions } from "@react-native-community/hooks";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
	console.log("App executed");

	return (
		<View style={styles.container}>
			{/* <Text>Wassup bitches!!</Text>
			<StatusBar style="auto" /> */}
			<WelcomeScreen />
		</View>
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
