import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import styled  from "styled-components/native";

export const Background = styled(LinearGradient as any).attrs(({ theme }) => ({
	colors: theme.colors.gradient.background,
	start: { x: 0, y: 0 },
	end: { x: 1, y: 1 },
}))`
	flex: 1;
`;

export const Container = styled.ScrollView.attrs(() => ({
	contentContainerStyle: {
		paddingBottom: 100,
	},
}))`
	flex: 1;
`;

export const SafeArea = styled(SafeAreaView)`
	flex: 1;
	gap: 20px;
	padding: 15px;
`;

export const Greetings = styled.Text`
	font-size: 24px;
	font-family: ${({ theme }) => theme.fonts.nunitoSans.bold};
	color: ${({ theme }) => theme.colors.textColor.inverted};
`;

export const FindTransactionsInput = styled.TextInput`
	background-color: #d9d9d920;
	color: #ffffffa0;
	border-radius: 999px;
	width: 100%;
	padding: 15px;
	height: 50px;
`;

export const LastAddedLabel = styled.Text`
	font-size: 18px;
	margin-top: 20px;
	font-family: ${({ theme }) => theme.fonts.nunitoSans.regular};
	color: ${({ theme }) => theme.colors.textColor.inverted};
	opacity: 0.5;
`;
