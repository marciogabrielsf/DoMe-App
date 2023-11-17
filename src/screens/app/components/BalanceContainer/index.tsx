import React from "react";
import {
	CategoryText,
	Container,
	Divider,
	Label,
	LabelContainer,
	SubTitle,
	TitleContainer,
} from "./styles";
import * as Icons from "@expo/vector-icons";

interface BalanceContainerProps {
	label: string;
	balance: number;
}

export default function BalanceContainer({ label, balance }: BalanceContainerProps) {
	const balanceColor = balance > 0 ? "#00FF00" : "#FF0000";

	const balanceString = balance.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});

	return (
		<Container>
			<TitleContainer>
				<LabelContainer>
					<Icons.AntDesign name="bars" size={24} color="#FFF" />
					<Label>Lists</Label>
				</LabelContainer>
				<Icons.AntDesign name="right" size={24} color="#FFF" />
			</TitleContainer>
			<Divider />
			<SubTitle>Last Added Categories</SubTitle>
		</Container>
	);
}
