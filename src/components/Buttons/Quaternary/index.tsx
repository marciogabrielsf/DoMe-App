import { View, Text, TouchableOpacityProps } from "react-native";
import React from "react";
import { ButtonContainer, ButtonGradient, ButtonText } from "./styles";

interface PrimaryButtonProps extends TouchableOpacityProps {
	children: React.ReactNode;
	loading?: boolean;
	disabled?: boolean;
}

export default function QuaternaryButton({ children, loading, disabled }: PrimaryButtonProps) {
	return (
		<ButtonContainer>
			<ButtonGradient>
				<ButtonText>{children}</ButtonText>
			</ButtonGradient>
		</ButtonContainer>
	);
}
