import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "@/screens/init/login/step1";
import { Init } from "@/screens/init/start";
import { LoginStep2 } from "@/screens/init/login/step2";
import SignUpStep1 from "@/screens/init/signUp/step1";
import SignUpStep2 from "@/screens/init/signUp/step2";
import SignUpStep3 from "@/screens/init/signUp/step3";
import SignUpStep4 from "@/screens/init/signUp/step4";
import SignUpStep5 from "@/screens/init/signUp/step5";

const { Navigator, Screen, Group } = createNativeStackNavigator();

export function UnloggedRoutes() {
	return (
		<Navigator>
			<Screen name="init" component={Init} options={{ headerShown: false }} />
			<Group
				screenOptions={{
					headerBackTitleVisible: false,
					headerTitle: "",
					headerTransparent: true,
					headerTintColor: "#fff",
				}}
			>
				<Screen name="loginStep1" component={LoginScreen} />
				<Screen name="loginStep2" component={LoginStep2} />
				<Screen name="signUpStep1" component={SignUpStep1} />
				<Screen name="signUpStep2" component={SignUpStep2} />
				<Screen name="signUpStep3" component={SignUpStep3} />
				<Screen name="signUpStep4" component={SignUpStep4} />
				<Screen name="signUpStep5" component={SignUpStep5} />
			</Group>
		</Navigator>
	);
}
