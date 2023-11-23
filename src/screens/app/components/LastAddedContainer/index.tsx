import { View, Text } from "react-native";
import React from "react";
import { Balance, Container, DateAdded, Label, LastAddedInfoView } from "./styles";

interface BalanceContainerProps {
	type: string;
	date: string;
	balance: number;
}

function LastAddedContainer({ type, date, balance }: BalanceContainerProps) {
	const balanceColor = balance > 0 ? "#00FF00" : "#FF0000";

	const balanceString = balance.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
	return (
		<Container>
			<LastAddedInfoView>
				<Label>{type}</Label>
				<DateAdded>{date}</DateAdded>
			</LastAddedInfoView>
			<Balance style={{ color: balanceColor }}>{balanceString}</Balance>
		</Container>
	);
}

export default React.memo(LastAddedContainer);
