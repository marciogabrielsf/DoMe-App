import React from "react";
import { Container, FindTransactionsInput, Greetings, LastAddedLabel, SafeArea } from "./styles";
import BalanceContainer from "./components/BalanceContainer";
import LastAddedContainer from "./components/LastAddedContainer";

export default function Home() {
	return (
		<Container>
			<SafeArea>
				<Greetings>Olá, Paulo</Greetings>
				<FindTransactionsInput
					placeholderTextColor={"#FFFFFF40"}
					placeholder="Pesquisar por Transações..."
				/>
				<BalanceContainer label="Ganhos este mês" balance={144050} />
				<BalanceContainer label="Gastos este mês" balance={-13025} />

				<LastAddedLabel>Últimos gastos</LastAddedLabel>

				<LastAddedContainer type="Mercado" date="Hoje as 23:24" balance={548} />
				<LastAddedContainer type="Mercado" date="Hoje as 23:24" balance={-6412} />
				<LastAddedContainer type="Mercado" date="Hoje as 23:24" balance={-125} />
				<LastAddedContainer type="Mercado" date="Hoje as 23:24" balance={-16} />
			</SafeArea>
		</Container>
	);
}
