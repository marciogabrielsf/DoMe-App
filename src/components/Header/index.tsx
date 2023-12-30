import React from "react";
import { Button, Container } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

interface Props {
	onBack?: () => void;
}

export default function Header({ onBack }: Props) {
	const navigation = useNavigation();

	const handleBack = () => navigation.goBack();

	return (
		<SafeAreaView>
			<Container>
				<Button onPress={handleBack}>
					<FontAwesome5 name="chevron-left" size={24} color={"#FFF"} />
				</Button>
			</Container>
		</SafeAreaView>
	);
}
