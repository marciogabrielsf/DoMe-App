import React from "react";
import { SignUpStep } from "./components/step";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ISignUpData } from "@/interfaces/Forms";

type SignUpParams = {
	signUpStep2: { data: ISignUpData };
};

export default function SignUpStep2() {
	const route = useRoute<RouteProp<SignUpParams, "signUpStep2">>();
	const navigation = useNavigation();
	const { data: routeData } = route.params;

	const name = routeData.name.split(" ")[0];

	const handlePress = (data: string) => {
		if (data.length < 3) return alert("Please, Insert a valid name");

		navigation.navigate("signUpStep3", {
			data: { ...routeData, email: data },
		});
	};

	return (
		<SignUpStep
			title={`${name}, Nice to meet you!`}
			subTitle="What is your E-Mail?"
			inputBoxProps={{ placeholder: "E-Mail" }}
			onPress={(data) => handlePress(data)}
		/>
	);
}
