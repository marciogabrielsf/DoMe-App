import { View, Text, TouchableOpacityProps } from "react-native";
import React from "react";
import { ButtonContainer, ButtonText } from "./styles";

interface PrimaryButtonProps extends TouchableOpacityProps {
	children: React.ReactNode;
	loading?: boolean;
	disabled?: boolean;
	Icon?: React.ReactNode;
	iconOptions?: {
		size?: number;
		color?: string;
		verticalAlign?: "row" | "column";
	};
}

export default function TertiaryButton({
	children,
	loading,
	disabled,
	iconOptions,
	Icon,
	...props
}: PrimaryButtonProps) {
	const iconDirection = iconOptions?.verticalAlign || "row";
	return (
		<ButtonContainer {...props} style={{ flexDirection: iconDirection }}>
			{Icon}
			<ButtonText>{children}</ButtonText>
		</ButtonContainer>
	);
}
