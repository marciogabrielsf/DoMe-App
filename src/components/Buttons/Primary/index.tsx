import { View, Text, TouchableOpacityProps, ActivityIndicator } from "react-native";
import React from "react";
import { ButtonContainer, ButtonGradient, ButtonText } from "./styles";

interface PrimaryButtonProps extends TouchableOpacityProps {
	children: React.ReactNode;
	loading?: boolean;
	disabled?: boolean;
}

export default function PrimaryButton({
	children,
	loading = false,
	disabled,
	...props
}: PrimaryButtonProps) {
	return (
		<ButtonContainer {...props}>
			<ButtonGradient>
				{loading ? (
					<ActivityIndicator size="small" color="#fff" />
				) : (
					<ButtonText>{children}</ButtonText>
				)}
			</ButtonGradient>
		</ButtonContainer>
	);
}
