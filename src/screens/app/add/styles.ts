import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { DefaultTheme } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Platform } from "react-native";

export const Background = styled(LinearGradient as any).attrs(({ theme }: DefaultTheme) => ({
	colors: theme.colors.gradient.background,
	start: { x: 0, y: 0 },
	end: { x: 1, y: 1 },
}))`
	flex: 1;
`;

export const KeyboardAvoid = styled.KeyboardAvoidingView.attrs({
	behavior: Platform.OS === "ios" ? "padding" : "height",
})`
	flex: 1;
`;

export const SafeArea = styled(SafeAreaView)`
	margin-top: 60px;
	padding: 10px;
	flex: 1;
`;

export const Title = styled.Text`
	font-size: 22px;
	color: ${({ theme }: DefaultTheme) => theme.colors.textColor.inverted};
	font-family: ${({ theme }: DefaultTheme) => theme.fonts.nunitoSans.regular};
`;

export const ContentView = styled.View`
	flex: 1;
`;

export const BottomTextBoxView = styled.View`
	padding: 10px;
	border-radius: 25px 25px 0 0;
	align-items: center;
	flex-direction: row;
	background-color: ${({ theme }: DefaultTheme) => theme.colors.gray[200]};
`;

export const TextBox = styled.TextInput`
	padding: 10px;
	flex: 1;
	color: #fff;
	border-radius: 999px;
	font-size: 18px;
	background-color: ${({ theme }: DefaultTheme) => theme.colors.gray[400]};
`;

export const MicrophoneBarIcon = styled(MaterialCommunityIcons as any).attrs(
	({ theme }: DefaultTheme) => ({
		name: "microphone",
		size: 32,
		color: theme.colors.textColor.inverted,
	})
)`
	padding: 10px;
`;
