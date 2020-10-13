import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, Button } from "react-native";
import { AppLoading } from "expo";
import { useFonts, RobotoCondensed_300Light, RobotoCondensed_300Light_Italic, RobotoCondensed_400Regular, RobotoCondensed_400Regular_Italic, RobotoCondensed_700Bold, RobotoCondensed_700Bold_Italic } from "@expo-google-fonts/roboto-condensed";

const WelcomeScreen = ({ navigation }) => {
	let [fontsLoaded] = useFonts({
		RobotoCondensed_300Light,
	});

	return (
		<ImageBackground style={styles.background} source={require("./../assets/snowboard.jpg")}>
			<View style={styles.logoContainer}>
				<Image source={require("./../assets/splash.png")} style={styles.logo} />
				<Text style={styles.motto}>FOLLOW THE SNOW!</Text>
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
		height: 100,
		width: 100,
		backgroundColor: "#ffffff",
	},
	motto: {
		color: "#ffffff",
		fontSize: 35,
		fontFamily: "RobotoCondensed-Light",
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
