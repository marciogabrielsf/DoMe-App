import React from "react";
import { ButtonsView, Container, Content, CustomButton, DomeMessage, DomeTitle } from "./styles";
import TypeWriter from "react-native-typewriter";
import { generateGreetingsMessage } from "@/config/greetingsMessages";
import PrimaryButton from "@/components/Buttons/Primary";
import TertiaryButton from "@/components/Buttons/Tertiary";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

interface HomeBannerProps {
	name: string;
}

export default function HomeBanner({ name }: HomeBannerProps) {
	const [message, setMessage] = React.useState(generateGreetingsMessage({ name, message: null }));
	const resetMessage = async () => {
		setTimeout(() => {
			const newName = generateGreetingsMessage({ name, message });
			setMessage(newName);
		}, 8000);
	};

	const navigation = useNavigation();

	const handleTalkPress = () => {
		navigation.navigate("addPage");
	};
	return (
		<Container>
			<Content>
				<DomeTitle>DoMe:</DomeTitle>
				<DomeMessage>
					<TypeWriter fixed onTypingEnd={() => resetMessage()} typing={1}>
						{message}
					</TypeWriter>
				</DomeMessage>
			</Content>
			<ButtonsView>
				<TertiaryButton
					onPress={handleTalkPress}
					Icon={<Ionicons name="chatbubble-ellipses-outline" size={24} color="#FFF" />}
				>
					Talk
				</TertiaryButton>
			</ButtonsView>
		</Container>
	);
}
