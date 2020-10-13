import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, Button } from "react-native";
import HomeScreen from "./HomeScreen";

const WelcomeScreen = ({ navigation }) => {
	return (
		<ImageBackground style={styles.background} source={require("./../assets/woman.jpg")}>
			<View style={styles.logoContainer}>
				<Image source={require("./../assets/hotsun.png")} style={styles.logo} />
				<Text style={styles.logoText}>Buy and sell</Text>
			</View>
			<Text style={[styles.skipButton, styles.buttons]} onPress={() => navigation.navigate("Home", { name: "Jane" })}>
				SKIP
			</Text>
			<TouchableOpacity style={styles.buttonContainer} onPress={() => alert("To be implemented!")}>
				<Text style={[styles.loginButton, styles.buttons]}>LOGIN or REGISTER</Text>
			</TouchableOpacity>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		width: "100%",
		alignItems: "center",
	},
	logoContainer: {
		position: "absolute",
		top: 70,
		alignItems: "center",
		width: "100%",
	},
	logo: {
		width: 200,
		backgroundColor: "#ffffff",
	},
	logoText: {
		color: "#ffffff",
	},
	buttonContainer: {
		width: "100%",
	},
	loginButton: {
		backgroundColor: "#00aeef",
	},
	skipButton: {
		color: "#fff",
		fontSize: 12,
	},
	buttons: {
		width: "100%",
		height: 70,
		textAlign: "center",
		textAlignVertical: "center",
	},
});

export default WelcomeScreen;
