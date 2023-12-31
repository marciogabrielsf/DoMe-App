import { Platform } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/screens/app/home";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TabBarCustomButton from "@/components/TabBar/TabBarButton";
import { BlurView } from "expo-blur";
import AddPage from "@/screens/app/add";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "@/screens/app/settings";

const BottomTab = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator();

export default function AppRoutes() {
	return (
		<StackNavigator.Navigator>
			<StackNavigator.Screen
				options={{
					headerShown: false,
				}}
				name="default"
				component={AppBottomNavigator}
			/>
			<StackNavigator.Screen
				options={{
					headerShown: true,
					headerTransparent: true,
					headerBackTitle: "Back",
					headerTitle: "Add",
					headerTitleStyle: {
						fontFamily: "NunitoSans-Regular",
						color: "#fff",
					},

					headerTintColor: Platform.OS === "ios" ? "#007AFF" : "#FFF",
					headerBackground: () => <BlurView style={{ flex: 1 }} intensity={60} tint="dark" />,
				}}
				name="addPage"
				component={AddPage}
			/>
		</StackNavigator.Navigator>
	);
}

function AppBottomNavigator() {
	const safeArea = useSafeAreaInsets();
	return (
		<BottomTab.Navigator
			screenOptions={{
				tabBarBackground: () => (
					<BlurView
						intensity={60}
						tint="dark"
						style={{
							flex: 1,
						}}
					/>
				),
				tabBarStyle: {
					position: "absolute",
					bottom: 0,
					height: 80 + safeArea.bottom,
					backgroundColor: "transparent",
					borderTopWidth: 2,
					borderTopColor: "#FFFFFF10",
					paddingBottom: safeArea.bottom + 20,
				},
			}}
		>
			<BottomTab.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
					title: "Home",
					tabBarButton: (props) => (
						<TabBarCustomButton
							{...props}
							label="Home"
							type="Ionicons"
							unfocusedIcon="home-outline"
							focusedIcon="home"
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="add"
				component={Home}
				options={({ navigation }) => {
					return {
						headerShown: false,

						title: "Adicionar",
						tabBarButton: (props) => (
							<TabBarCustomButton
								{...props}
								onPress={() => navigation.push("addPage")}
								label="Talk"
								type="Ionicons"
								unfocusedIcon="chatbubble-ellipses-outline"
								focusedIcon="chatbubble"
							/>
						),
					};
				}}
			/>
			<BottomTab.Screen
				name="Settings"
				component={Settings}
				options={{
					headerShown: false,
					title: "Configurações",
					tabBarButton: (props) => (
						<TabBarCustomButton
							label="Settings"
							{...props}
							type="Ionicons"
							unfocusedIcon="settings-outline"
							focusedIcon="settings"
						/>
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}
