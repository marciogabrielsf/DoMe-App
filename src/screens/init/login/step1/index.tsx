import React, { useState } from "react";
import DefaultBackground from "@/components/Background";
import {
	Container,
	InputBox,
	InputContainer,
	SafeArea,
	SubTitle,
	Title,
	TitleContainer,
} from "./styles";
import PrimaryButton from "@/components/Buttons/Primary";
import QuaternaryButton from "@/components/Buttons/Quaternary";
import { useNavigation } from "@react-navigation/native";

export function LoginScreen() {
	const navigation = useNavigation();
	const [login, setLogin] = useState("");
	const handleNextStep = () => {
		if (login.length < 3) return alert("Invalid Login");

		navigation.navigate("loginStep2", { login });
	};

	return (
		<DefaultBackground>
			<SafeArea>
				<Container>
					<TitleContainer>
						<Title>Hello There,</Title>
						<SubTitle>Welcome Back</SubTitle>
					</TitleContainer>
					<InputContainer>
						<InputBox
							autoFocus
							onChangeText={(e) => setLogin(e)}
							keyboardType="email-address"
							placeholder="E-Mail or CPF"
						/>
					</InputContainer>
					<PrimaryButton onPress={handleNextStep}>Continue</PrimaryButton>
					<QuaternaryButton>Forgot your password?</QuaternaryButton>
				</Container>
			</SafeArea>
		</DefaultBackground>
	);
}
