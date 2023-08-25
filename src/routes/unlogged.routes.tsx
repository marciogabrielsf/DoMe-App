import { View, Text } from "react-native";
import React from "react";
import Home from "@/screens/app/home";
import { createStackNavigator } from "@react-navigation/stack";
import Init from "@/screens/init";

const Stack = createStackNavigator();

export default function UnloggedRoutes() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="init" component={Init} options={{ headerShown: false }} />
		</Stack.Navigator>
	);
}
