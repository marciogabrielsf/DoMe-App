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
} from "./styles";
import PrimaryButton from "@/components/Buttons/Primary";
import { useAuth } from "@/hooks/useAuth";
import { animations } from "./animations";

export default function Init() {
	const auth = useAuth();

	const handleLogin = () => {
		auth.signIn();
	};

	return (
		<Container>
			<SafeArea>
				<Header {...animations.header}>
					<Title>DoMe</Title>
					<SubTextLine />
				</Header>
				<Footer {...animations.footer}>
					<FooterText>Take Care of your Finances with the power of your voice.</FooterText>
					<PrimaryButton onPress={handleLogin}>Continue</PrimaryButton>
				</Footer>
			</SafeArea>
			<BackgroundVector />
		</Container>
	);
}
