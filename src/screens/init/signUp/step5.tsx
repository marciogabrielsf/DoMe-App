import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ISignUpData } from "@/interfaces/Forms";
import { Container, SafeArea, Subtitle, Title } from "./styles";
import DefaultBackground from "@/components/Background";
import PrimaryButton from "@/components/Buttons/Primary";
import { useAuth } from "@/hooks/useAuth";

type SignUpParams = {
	signUpStep2: { data: ISignUpData };
};

export default function SignUpStep5() {
	const route = useRoute<RouteProp<SignUpParams, "signUpStep2">>();
	const { data: routeData } = route.params;
	const auth = useAuth();

	const name = routeData.name.split(" ")[0];

	const handlePress = () => auth.signIn();

	return (
		<DefaultBackground>
			<SafeArea>
				<Container>
					<Title>Account Created Successfully!</Title>
					<Subtitle>
						That's amazing {name}! Now you can access the app on the button below.
					</Subtitle>
					<PrimaryButton onPress={handlePress}>Continue</PrimaryButton>
				</Container>
			</SafeArea>
		</DefaultBackground>
	);
}
