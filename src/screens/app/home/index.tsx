import React from "react";
import { Background, Container, FindTransactionsInput, Greetings, SafeArea } from "./styles";
import BalanceContainer from "../components/BalanceContainer";
import { TouchableOpacity } from "react-native";
import * as AsyncStorage from "@react-native-async-storage/async-storage";
import * as Haptics from "expo-haptics";
import HomeBanner from "../components/Banner";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
	const { user, signOut } = useAuth();

	const name = user.full_name.split(" ")[0];

	return (
		<Background>
			<Container showsVerticalScrollIndicator={false}>
				<SafeArea>
					<Greetings>Hi, {name}</Greetings>
					{/* <FindTransactionsInput
						placeholderTextColor={"#FFFFFF40"}
						placeholder="Find Transactions..."
					/> */}
					<HomeBanner name={name} />
					<TouchableOpacity onPress={signOut}>
						<BalanceContainer label="Ganhos este mês" balance={144050} />
					</TouchableOpacity>

					{/* <LastAddedLabel>Last Transactions</LastAddedLabel>

					<LastAddedContainer type="Market" date="Today at 23:24" balance={548} />
					<LastAddedContainer type="Mechanic" date="Today at 23:24" balance={-6412} />
					<LastAddedContainer type="Car Parts" date="Today at 23:24" balance={-125} />
					<LastAddedContainer type="Market" date="Today at 23:24" balance={-16} /> */}
				</SafeArea>
			</Container>
		</Background>
	);
}
