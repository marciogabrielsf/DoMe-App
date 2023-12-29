import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "@/screens/init/login";
import { Init } from "@/screens/init/start";

const { Navigator, Screen } = createNativeStackNavigator();

export function UnloggedRoutes() {
	return (
		<Navigator>
			<Screen name="init" component={Init} options={{ headerShown: false }} />
			<Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
			<Screen name="signup" component={LoginScreen} options={{ headerShown: false }} />
		</Navigator>
	);
}
