import { View, Text, TouchableOpacityProps } from "react-native";
import React from "react";
import { SettingContainer } from "./styles";

interface Props extends TouchableOpacityProps {
	children?: React.ReactNode;
}

export default function SettingButton({ children, ...props }: Props) {
	return <SettingContainer {...props}>{children}</SettingContainer>;
}
