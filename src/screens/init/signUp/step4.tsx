import React from "react";
import { SignUpStep } from "./components/step";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ISignUpData } from "@/interfaces/Forms";
import { useAuth } from "@/hooks/useAuth";

type SignUpParams = {
	signUpStep2: { data: ISignUpData };
};

export default function SignUpStep4() {
	const route = useRoute<RouteProp<SignUpParams, "signUpStep2">>();
	const navigation = useNavigation();
	const { signUpWithEmail, loading } = useAuth();
	const { data: routeData } = route.params;
	const handlePress = async (data: string) => {
		if (data.length < 3) return alert("Please, Insert a valid Password!");

		if (data !== routeData.password) return alert("Passwords don't match");

		await signUpWithEmail(routeData.email, routeData.password, {
			full_name: routeData.name,
		});
		navigation.navigate("signUpStep5", { data: { ...routeData, confirmPassword: data } });
	};

	return (
		<SignUpStep
			title="We are almost there!"
			subTitle="Now, i need you to confirm the password."
			inputBoxProps={{ placeholder: "Confirm Password", secureTextEntry: true }}
			onPress={(data) => handlePress(data)}
			ButtonText="Create Account"
			isLoading={loading}
		/>
	);
}
