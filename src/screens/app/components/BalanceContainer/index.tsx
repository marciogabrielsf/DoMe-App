import { View, Text } from "react-native";
import React from "react";
import { Balance, Container, Label } from "./styles";

interface BalanceContainerProps {
	label: string;
	balance: number;
}

export default function BalanceContainer({ label, balance }: BalanceContainerProps) {
	const balanceColor = balance > 0 ? "#00FF00" : "#FF0000";

	return (
		<Container>
			<Label>{label}</Label>
			<Balance style={{ color: balanceColor }}>{balance}</Balance>
		</Container>
	);
}
