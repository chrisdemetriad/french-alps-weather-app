import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import WeatherInfo from "./WeatherInfo";
const WEATHER_API_KEY = "6136baafe14b97e954bf3d0b495e9e2c";
const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";
import UnitsPicker from "./UnitsPicker";
import { colours } from "../utils";

const HomeScreen = () => {
	const [errorMessage, setErrorMessage] = useState(null);
	const [currentWeather, setCurrentWeather] = useState(null);
	const [unitsSystem, setUnitsSystem] = useState("metric");
	useEffect(() => {
		load();
	}, [unitsSystem]);

	async function load() {
		setCurrentWeather(null);
		setErrorMessage(null);
		try {
			let { status } = await Location.requestPermissionsAsync();
			if (status != "granted") {
				setErrorMessage("Access to location is needed to run the app");
				return;
			}
			const location = await Location.getCurrentPositionAsync();
			const { latitude, longitude } = location.coords;
			const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;

			const response = await fetch(weatherUrl);
			const result = await response.json();
			if (response.ok) {
				setCurrentWeather(result);
			} else {
				setErrorMessage(result.message);
			}
		} catch (error) {
			setErrorMessage(error.message);
		}
	}

	if (currentWeather) {
		return (
			<View style={styles.container}>
				<UnitsPicker unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem} />
				<WeatherInfo currentWeather={currentWeather} />
				<StatusBar style="auto" />
			</View>
		);
	} else if (errorMessage) {
		return (
			<View style={styles.container}>
				<View styles={styles.main}>
					<Text>{errorMessage}</Text>
					<StatusBar style="auto" />
				</View>
			</View>
		);
	} else {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" color={colours.PRIMARY_COLOUR} />
				<StatusBar style="auto" />
			</View>
		);
	}
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		color: "#ffffff",
		fontSize: 20,

		justifyContent: "center",
	},
	main: {
		justifyContent: "center",
		flex: 1,
	},
});
