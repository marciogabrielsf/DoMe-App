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
import Toast from "react-native-toast-message";
import * as Haptics from "expo-haptics";

type LoginParams = {
	loginStep2: { login: string };
};

export function LoginStep2() {
	const route = useRoute<RouteProp<LoginParams, "loginStep2">>();
	const { signInWithEmail, loading } = useAuth();
	const [password, setPassword] = useState("");
	const { login } = route.params;

	const handleLogin = async () => {
		if (password.length < 3) return alert("Invalid Password");
		try {
			await signInWithEmail(login, password);
		} catch (err) {
			Toast.show({
				type: "error",
				text1: err.message,
				autoHide: true,
			});
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
		}
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
								autoFocus
								placeholder="Password"
							/>
						</InputContainer>
					</TextInputContainer>
					<PrimaryButton loading={loading} onPress={handleLogin}>
						Log in
					</PrimaryButton>
					<QuaternaryButton>Forgot your password?</QuaternaryButton>
				</Container>
			</SafeArea>
		</DefaultBackground>
	);
}
