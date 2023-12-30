import { View, Text } from "react-native";
import React from "react";
import { SignUpStep } from "./components/step";
import { useNavigation } from "@react-navigation/native";

export default function SignUpStep1() {
	const navigation = useNavigation();

	const handlePress = (data: string) => {
		if (data.length < 3) return alert("Please, Insert a valid name");
		navigation.navigate("signUpStep2", {
			data: { name: data, confirmPassword: "", email: "", password: "" },
		});
	};

	return (
		<SignUpStep
			title="Hello! Let's Create Your account."
			subTitle="What's your name?"
			inputBoxProps={{ placeholder: "Name" }}
			onPress={(data) => handlePress(data)}
		/>
	);
}
