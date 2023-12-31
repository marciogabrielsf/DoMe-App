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
import { TextInputProps } from "react-native";

interface Props {
	title: string;
	subTitle: string;
	ButtonText?: string;
	onPress?: (data: string) => void;
	inputBoxProps?: TextInputProps;
	isLoading?: boolean;
}

export function SignUpStep({
	title,
	subTitle,
	onPress,
	inputBoxProps,
	ButtonText,
	isLoading,
}: Props) {
	const [data, setData] = useState("");

	return (
		<DefaultBackground>
			<SafeArea>
				<Container>
					<TitleContainer>
						<Title>{title}</Title>

						<SubTitle>{subTitle}</SubTitle>
					</TitleContainer>
					<InputContainer>
						<InputBox {...inputBoxProps} autoFocus onChangeText={(e) => setData(e)} />
					</InputContainer>
					<PrimaryButton loading={isLoading} onPress={() => onPress(data)}>
						{ButtonText || "Continue"}
					</PrimaryButton>
				</Container>
			</SafeArea>
		</DefaultBackground>
	);
}
