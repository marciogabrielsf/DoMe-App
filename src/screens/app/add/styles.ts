import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { DefaultTheme } from "styled-components/native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { BlurView } from "expo-blur";
import { MotiView } from "moti";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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

export const Title = styled.Text`
	font-size: 22px;
	color: ${({ theme }: DefaultTheme) => theme.colors.textColor.inverted};
	font-family: ${({ theme }: DefaultTheme) => theme.fonts.nunitoSans.regular};
`;

export const ContentView = styled.ScrollView.attrs({
	contentInsetAdjustmentBehavior: "automatic",
	contentContainerStyle: {
		paddingTop: 100,
		padding: 10,
		flexDirection: "column-reverse",
	},
})`
	flex: 1;
`;

export const MessageContainer = styled.View`
	flex: 1;
`;

export const BottomTextBoxView = styled(BlurView).attrs(({ theme }: DefaultTheme) => ({
	intensity: 100,
	tint: "dark",
}))`
	padding: 15px 20px 25px 20px;
	gap: 10px;
	border-radius: 10px 10px 0 0;

	align-items: center;
	flex-direction: row;
	background-color: transparent;
`;

export const TextBox = styled.TextInput.attrs(({ theme }: DefaultTheme) => ({
	placeholderTextColor: "#808080",
	selectionColor: theme.colors.textColor.inverted,
	placeholder: "Digite aqui...",
	spellCheck: false,
	autoCorrect: false,
	multiline: false,
}))`
	padding: 10px;
	flex: 1;
	color: #fff;
	font-family: ${({ theme }: DefaultTheme) => theme.fonts.nunitoSans.regular};
	border-radius: 20px;
	font-size: 18px;
	background-color: ${({ theme }: DefaultTheme) => theme.colors.gray[400]};
`;

export const MicrophoneBarIcon = styled(MaterialCommunityIcons as any).attrs(
	({ theme }: DefaultTheme) => ({
		name: "microphone",
		size: 28,
		color: theme.colors.textColor.inverted,
	})
)`
	padding: 10px;
`;

export const SendButtonIcon = styled(Ionicons as any).attrs(({ theme }: DefaultTheme) => ({
	name: "ios-send",
	size: 22,
	color: theme.colors.textColor.inverted,
}))``;

export const TouchableButton = styled.TouchableOpacity``;

export const SendButtonView = styled.View`
	background-color: ${({ theme }: DefaultTheme) => theme.colors.purple[400]};
	border-radius: 999px;
	padding: 10px;
`;
