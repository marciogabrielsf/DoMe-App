import React from "react";
import DefaultBackground from "@/components/Background";
import { ButtonLabel, Container, Label, SettingSection, Title } from "./styles";
import SettingButton from "./components/settingButton/settingButton";
import { useNavigation } from "@react-navigation/native";
import ConfirmationModal from "./components/ConfirmationModal";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import theme from "@/themes/theme";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
export default function Settings() {
	const navigator = useNavigation();

	const toggleBottomSheet = () => bottomSheetRef.current?.present();

	const handleClearAllConversation = () => navigator.navigate("clearAllConversations");

	const bottomSheetRef = React.useRef<BottomSheetModal>(null);
	return (
		<DefaultBackground>
			<ConfirmationModal bottomSheetRef={bottomSheetRef} />

			<Container>
				<Title>Settings</Title>
				<Label>Chat</Label>
				<SettingSection>
					<SettingButton>
						<MaterialIcons name="translate" size={22} color={theme.colors.iconColor} />
						<ButtonLabel>Change Language</ButtonLabel>
					</SettingButton>
					<SettingButton onPress={handleClearAllConversation}>
						<Ionicons name="trash-outline" size={22} color={theme.colors.iconColor} />
						<ButtonLabel>Clear All Conversation</ButtonLabel>
					</SettingButton>
				</SettingSection>

				<Label>Help</Label>
				<SettingSection>
					<SettingButton>
						<Ionicons name="mail-outline" size={22} color={theme.colors.iconColor} />
						<ButtonLabel>Contact Us</ButtonLabel>
					</SettingButton>
					<SettingButton onPress={toggleBottomSheet}>
						<Ionicons name="exit-outline" size={22} color={theme.colors.iconColor} />
						<ButtonLabel>Sign Out</ButtonLabel>
					</SettingButton>
				</SettingSection>
			</Container>
		</DefaultBackground>
	);
}
