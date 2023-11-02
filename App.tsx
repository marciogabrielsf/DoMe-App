import Routes from "@/routes";
import Home from "@/screens/app/home";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "@/themes/theme";
import { AuthProvider } from "@/contexts/auth";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-reanimated";
import "react-native-gesture-handler";
import ReactQueryProvider from "@/contexts/ReactQueryProvider";

export default function App() {
	const [fontsLoaded] = useFonts({
		"NunitoSans-Black": require("./assets/fonts/NunitoSans-Black.ttf"),
		"NunitoSans-Bold": require("./assets/fonts/NunitoSans-Bold.ttf"),
		"NunitoSans-ExtraBold": require("./assets/fonts/NunitoSans-ExtraBold.ttf"),
		"NunitoSans-ExtraLight": require("./assets/fonts/NunitoSans-ExtraLight.ttf"),
		"NunitoSans-Light": require("./assets/fonts/NunitoSans-Light.ttf"),
		"NunitoSans-Regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
		"NunitoSans-SemiBold": require("./assets/fonts/NunitoSans-SemiBold.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<AuthProvider>
			<ReactQueryProvider>
				<SafeAreaProvider>
					<ThemeProvider theme={theme}>
						<Routes />
					</ThemeProvider>
				</SafeAreaProvider>
			</ReactQueryProvider>
		</AuthProvider>
	);
}
