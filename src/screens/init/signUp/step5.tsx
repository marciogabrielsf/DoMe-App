import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ISignUpData } from "@/interfaces/Forms";
import { Container, SafeArea, Subtitle, Title } from "./styles";
import DefaultBackground from "@/components/Background";
import PrimaryButton from "@/components/Buttons/Primary";
import { useAuth } from "@/hooks/useAuth";
import * as Haptics from "expo-haptics";

type SignUpParams = {
	signUpStep2: { data: ISignUpData };
};

export default function SignUpStep5() {
	const route = useRoute<RouteProp<SignUpParams, "signUpStep2">>();
	const { data: routeData } = route.params;
	const { signInWithEmail, loading } = useAuth();

	const name = routeData.name.split(" ")[0];

	const handlePress = async () => {
		try {
			await signInWithEmail(routeData.email, routeData.password);
		} catch (err) {
			alert(err.message);
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
		}
	};

	return (
		<DefaultBackground>
			<SafeArea>
				<Container>
					<Title>Account Created Successfully!</Title>
					<Subtitle>
						That's amazing {name}! Now please, verify your e-mail address and click Continue.
					</Subtitle>
					<PrimaryButton loading={loading} onPress={handlePress}>
						Continue
					</PrimaryButton>
				</Container>
			</SafeArea>
		</DefaultBackground>
	);
}
