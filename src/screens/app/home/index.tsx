import React from "react";
import {
	Background,
	Container,
	FindTransactionsInput,
	Greetings,
	LastAddedLabel,
	SafeArea,
} from "./styles";
import BalanceContainer from "../components/BalanceContainer";
import LastAddedContainer from "../components/LastAddedContainer";
import { TouchableOpacity } from "react-native";
import * as AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
	return (
		<Background>
			<Container showsVerticalScrollIndicator={false}>
				<SafeArea>
					<Greetings>Olá, Paulo</Greetings>
					<FindTransactionsInput
						placeholderTextColor={"#FFFFFF40"}
						placeholder="Pesquisar por Transações..."
					/>
					<TouchableOpacity onPress={() => AsyncStorage.default.clear()}>
						<BalanceContainer label="Ganhos este mês" balance={144050} />
					</TouchableOpacity>
					<BalanceContainer label="Gastos este mês" balance={-13025} />

					<LastAddedLabel>Últimos gastos</LastAddedLabel>

					<LastAddedContainer type="Mercado" date="Hoje as 23:24" balance={548} />
					<LastAddedContainer type="Mercado" date="Hoje as 23:24" balance={-6412} />
					<LastAddedContainer type="Mercado" date="Hoje as 23:24" balance={-125} />
					<LastAddedContainer type="Mercado" date="Hoje as 23:24" balance={-16} />
				</SafeArea>
			</Container>
		</Background>
	);
}
