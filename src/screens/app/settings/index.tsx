import React from "react";
import DefaultBackground from "@/components/Background";
import { ButtonLabel, Container, Label, SettingSection } from "./styles";
import SettingButton from "./components/settingButton/settingButton";
import { appSettings } from "@/config/settings";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@/hooks/useAuth";
export default function Settings() {
	const navigator = useNavigation();
	const auth = useAuth();

	return (
		<DefaultBackground>
			<Container>
				{appSettings.map((setting) => (
					<SettingSection key={setting.label}>
						<Label>{setting.label}</Label>
						{setting?.settings?.map((item, index) => (
							<SettingButton key={index} onPress={() => item.action(auth, navigator)}>
								{item.icon}
								<ButtonLabel>{item.label}</ButtonLabel>
							</SettingButton>
						))}
					</SettingSection>
				))}
			</Container>
		</DefaultBackground>
	);
}
