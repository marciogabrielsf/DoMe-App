import React from "react";
import { SignUpStep } from "./components/step";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ISignUpData } from "@/interfaces/Forms";

type SignUpParams = {
	signUpStep2: { data: ISignUpData };
};

export default function SignUpStep3() {
	const route = useRoute<RouteProp<SignUpParams, "signUpStep2">>();
	const navigation = useNavigation();
	const { data: routeData } = route.params;

	const name = routeData.name.split(" ")[0];

	const handlePress = (data: string) => {
		if (data.length < 3) return alert("Please, Insert a valid Password!");

		navigation.navigate("signUpStep4", {
			data: { ...routeData, password: data },
		});
	};

	return (
		<SignUpStep
			title={`Ok, ${name}!`}
			subTitle="Now, create a password."
			inputBoxProps={{ placeholder: "Password", secureTextEntry: true }}
			onPress={(data) => handlePress(data)}
		/>
	);
}
