import React from "react";
import DefaultBackground from "@/components/Background";
import { Container, MainText, WarningMessage } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import TertiaryButton from "@/components/Buttons/Tertiary";
import { useConversation } from "@/contexts/conversation";
import Toast from "react-native-toast-message";
import { Alert } from "react-native";
import * as Haptics from "expo-haptics";

export default function ClearConversations() {
	const { clearChat } = useConversation();

	const clearChatHandle = async () => {
		Alert.alert(
			"Are you sure you want to clear all messages?",
			"This action is permanent and cannot be undone!",
			[
				{
					text: "Cancel",
				},
				{
					text: "Clear",
					style: "destructive",
					onPress: async () => {
						await clearChat();
						Toast.show({
							type: "success",
							text1: "Chat cleared!",
							autoHide: true,
						});
						Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
					},
				},
			]
		);
	};

	return (
		<DefaultBackground>
			<SafeAreaView>
				<Container>
					<MainText>Are you sure you want to clear all messages?</MainText>
					<WarningMessage>This action is permanent and cannot be undone!</WarningMessage>
					<TertiaryButton onPress={clearChatHandle}>Clear</TertiaryButton>
				</Container>
			</SafeAreaView>
		</DefaultBackground>
	);
}
