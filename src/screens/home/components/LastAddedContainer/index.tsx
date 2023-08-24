import { View, Text } from "react-native";
import React from "react";
import { Balance, Container, DateAdded, Label, LastAddedInfoView } from "./styles";

interface BalanceContainerProps {
	type: string;
	date: string;
	balance: number;
}

export default function LastAddedContainer({ type, date, balance }: BalanceContainerProps) {
	const balanceColor = balance > 0 ? "#00FF00" : "#FF0000";

	return (
		<Container>
			<LastAddedInfoView>
				<Label>{type}</Label>
				<DateAdded>{date}</DateAdded>
			</LastAddedInfoView>
			<Balance style={{ color: balanceColor }}>{balance}</Balance>
		</Container>
	);
}
