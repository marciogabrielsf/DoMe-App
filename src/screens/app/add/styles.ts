import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Platform, FlatList } from "react-native";

export const SafeArea = styled.SafeAreaView`
	flex: 1;
`;

export const Background = styled(LinearGradient as any).attrs(({ theme }) => ({
	colors: theme.colors.gradient.background,
	start: { x: 0, y: 0 },
	end: { x: 1, y: 1 },
}))`
	flex: 1;
`;

export const KeyboardAvoid = styled.KeyboardAvoidingView.attrs({
	behavior: Platform.OS === "ios" ? "position" : null,
})``;

export const Title = styled.Text`
	font-size: 22px;
	color: ${({ theme }) => theme.colors.textColor.inverted};
	font-family: ${({ theme }) => theme.fonts.nunitoSans.regular};
`;

export const MessageContainer = styled.FlatList.attrs({
	automaticallyAdjustKeyboardInsets: true,
	automaticallyAdjustContentInsets: true,
	showsVerticalScrollIndicator: false,
})`` as unknown as typeof FlatList;

export const MessageView = styled.View`
	width: 100%;
	overflow: hidden;
	position: absolute;
	bottom: 0;
	left: 0;
	border-top-right-radius: 15px;
	border-top-left-radius: 15px;
`;

export const BottomTextBoxView = styled(BlurView).attrs(({ theme }) => ({
	intensity: 100,
	tint: "dark",
}))`
	padding: 15px 20px 20px 20px;
	align-items: center;
	flex-direction: row;
`;

export const TextBox = styled.TextInput.attrs(({ theme }) => ({
	placeholderTextColor: "#808080",
	selectionColor: theme.colors.textColor.inverted,
	placeholder: "Type Here...",
	spellCheck: true,
	multiline: true,
	autoCorrect: true,
}))`
	padding: 10px;
	flex: 1;
	color: #fff;
	font-family: ${({ theme }) => theme.fonts.nunitoSans.regular};
	border-radius: 20px;
	font-size: 16px;
	border: solid 0.5px ${({ theme }) => theme.colors.gray[400]};
	background-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const MicrophoneBarIcon = styled(MaterialCommunityIcons as any).attrs(({ theme }) => ({
	name: "microphone",
	size: 28,
	color: theme.colors.textColor.inverted,
}))`
	padding: 10px;
`;

export const SendButtonIcon = styled(Ionicons as any).attrs(({ theme }) => ({
	name: "ios-send",
	size: 22,
	color: theme.colors.textColor.inverted,
}))``;

export const TouchableButton = styled.TouchableOpacity``;

interface ButtonProps {
	isLoading?: boolean;
}

export const SendButtonView = styled.View<ButtonProps>`
	background-color: ${({ theme }) => theme.colors.purple[400]};
	border-radius: 999px;
	padding: 10px;

	${({ isLoading }: ButtonProps) =>
		isLoading &&
		`
		background-color: #202020;
	`}
`;
