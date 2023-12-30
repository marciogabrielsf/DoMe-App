import React, { useState } from "react";
import DefaultBackground from "@/components/Background";
import {
	Container,
	InputBox,
	InputContainer,
	SafeArea,
	SubTitle,
	TextInputContainer,
	Title,
	TitleContainer,
} from "./styles";
import PrimaryButton from "@/components/Buttons/Primary";
import QuaternaryButton from "@/components/Buttons/Quaternary";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useAuth } from "@/hooks/useAuth";

type LoginParams = {
	loginStep2: { login: string };
};

export function LoginStep2() {
	const route = useRoute<RouteProp<LoginParams, "loginStep2">>();
	const auth = useAuth();
	const [password, setPassword] = useState("");
	const { login } = route.params;

	const handleLogin = () => {
		if (password.length < 3) return alert("Invalid Password");
		console.log("\nLogin: ", login, "\nPassword: ", password);
		auth.signIn();
	};
	return (
		<DefaultBackground>
			<SafeArea>
				<Container>
					<TitleContainer>
						<Title>Now,</Title>
						<SubTitle>Insert your password.</SubTitle>
					</TitleContainer>
					<TextInputContainer>
						<InputContainer>
							<InputBox
								onChangeText={(text) => setPassword(text)}
								secureTextEntry
								placeholder="Password"
							/>
						</InputContainer>
					</TextInputContainer>
					<PrimaryButton onPress={handleLogin}>Log in</PrimaryButton>
					<QuaternaryButton>Forgot your password?</QuaternaryButton>
				</Container>
			</SafeArea>
		</DefaultBackground>
	);
}