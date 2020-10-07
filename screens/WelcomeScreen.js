import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from "react-native";
import HomeScreen from "./HomeScreen";

const WelcomeScreen = () => {
	return (
		<ImageBackground style={styles.background} source={require("./../assets/pax.webp")}>
			<View style={styles.logoContainer}>
				<Image source={require("./../assets/logo.png")} style={styles.logo} />
				<Text style={styles.logoText}>Buy and sell</Text>
			</View>
			<TouchableOpacity style={styles.buttonContainer} onPress={() => alert("To be implemented!")}>
				<Text style={[styles.loginButton, styles.buttons]}>LOGIN or REGISTER</Text>
			</TouchableOpacity>
			<Text style={[styles.skipButton, styles.buttons]}>SKIP</Text>
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
		backgroundColor: "#f5c565",
	},
	skipButton: {
		backgroundColor: "#4ecdc4",
	},
	buttons: {
		width: "100%",
		height: 70,
		textAlign: "center",
		textAlignVertical: "center",
	},
});

export default WelcomeScreen;
