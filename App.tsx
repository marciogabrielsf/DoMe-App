import { Routes } from "@/routes";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "@/themes/theme";
import { AuthProvider } from "@/contexts/auth";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ReactQueryProvider from "@/contexts/ReactQueryProvider";
import { ConversationProvider } from "@/contexts/conversation";
import Toast from "react-native-toast-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "react-native-reanimated";
import "react-native-gesture-handler";
import DefaultBackground from "@/components/Background";
import { toastConfig } from "@/themes/toast";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

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
		<GestureHandlerRootView style={{ flex: 1 }}>
			<BottomSheetModalProvider>
				<AuthProvider>
					<ReactQueryProvider>
						<ConversationProvider>
							<SafeAreaProvider>
								<ThemeProvider theme={theme}>
									<DefaultBackground>
										<Routes />
										<Toast config={toastConfig} />
									</DefaultBackground>
								</ThemeProvider>
							</SafeAreaProvider>
						</ConversationProvider>
					</ReactQueryProvider>
				</AuthProvider>
			</BottomSheetModalProvider>
		</GestureHandlerRootView>
	);
}
