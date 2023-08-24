import { SafeAreaView } from "react-native-safe-area-context";
import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.ScrollView`
	flex: 1;
	background-color: ${({ theme }: DefaultTheme) => theme.colors.purple[200]};
`;

export const SafeArea = styled(SafeAreaView)`
	flex: 1;
	padding: 10px;
`;

export const Greetings = styled.Text`
	font-size: 24px;
	margin-bottom: 20px;
	font-family: ${({ theme }: DefaultTheme) => theme.fonts.nunitoSans.bold};
	color: ${({ theme }: DefaultTheme) => theme.colors.textColor.inverted};
`;

export const FindTransactionsInput = styled.TextInput`
	background-color: #d9d9d920;
	color: #ffffffa0;
	border-radius: 999px;
	width: 100%;
	padding: 15px;
	height: 50px;
	margin-bottom: 20px;
`;

export const LastAddedLabel = styled.Text`
	font-size: 18px;
	margin-top: 20px;
	margin-bottom: 20px;
	font-family: ${({ theme }: DefaultTheme) => theme.fonts.nunitoSans.regular};
	color: ${({ theme }: DefaultTheme) => theme.colors.textColor.inverted};
	opacity: 0.5;
`;
