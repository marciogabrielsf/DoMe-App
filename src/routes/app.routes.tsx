import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/screens/home";
import Init from "@/screens/init";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TabBarCustomButton from "@/components/TabBar/TabBarButton";
import { AnimatedTabBar } from "@/components/TabBar";
import { BlurView } from "expo-blur";

const BottomTab = createBottomTabNavigator();

export default function AppRoutes() {
	const safeArea = useSafeAreaInsets();

	return (
		<BottomTab.Navigator
			screenOptions={{
				tabBarBackground: () => (
					<BlurView
						intensity={50}
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
				options={{
					headerShown: false,
					title: "Adicionar",
					tabBarButton: (props) => (
						<TabBarCustomButton
							{...props}
							label="Adicionar"
							type="FontAwesome5"
							unfocusedIcon="plus"
							focusedIcon="plus"
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="Settings"
				component={Init}
				options={{
					headerShown: false,
					title: "Configurações",
					tabBarButton: (props) => (
						<TabBarCustomButton
							label="Configurações"
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
