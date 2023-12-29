import React from "react";
import {
	Container,
	SubTextLine,
	Title,
	BackgroundVector,
	Header,
	Footer,
	FooterText,
	SafeArea,
	TextSpan,
} from "./styles";
import PrimaryButton from "@/components/Buttons/Primary";
import { animations } from "./animations";
import QuaternaryButton from "@/components/Buttons/Quaternary";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@/hooks/useAuth";

export function Init() {
	const navigation = useNavigation();
	const auth = useAuth();

	const handleLogin = () => navigation.navigate("login");
	const handleSignUp = () => auth.signIn();

	return (
		<Container>
			<SafeArea>
				<Header {...animations.header}>
					<Title>DoMe</Title>
					<SubTextLine />
				</Header>
				<Footer {...animations.footer}>
					<FooterText>Take Care of your Finances with the power of your voice.</FooterText>
					<PrimaryButton onPress={handleSignUp}>Continue</PrimaryButton>
					<QuaternaryButton onPress={handleLogin}>
						Already has an Account? <TextSpan>Log In.</TextSpan>
					</QuaternaryButton>
				</Footer>
			</SafeArea>
			<BackgroundVector />
		</Container>
	);
}
