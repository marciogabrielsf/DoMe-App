import { View, Text, TouchableOpacityProps } from "react-native";
import React from "react";
import { ButtonContainer, ButtonText } from "./styles";

interface PrimaryButtonProps extends TouchableOpacityProps {
	children: React.ReactNode;
	loading?: boolean;
	disabled?: boolean;
}

export default function QuaternaryButton({
	children,
	loading,
	...props
}: PrimaryButtonProps) {
	return (
		<ButtonContainer {...props} >
			<ButtonText>{children}</ButtonText>
		</ButtonContainer>
	);
}
