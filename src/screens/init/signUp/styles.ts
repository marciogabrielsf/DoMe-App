import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	padding: 20px;
	gap: 5px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.textColor.inverted};
	font-family: ${({ theme }) => theme.fonts.nunitoSans.bold};
	font-size: 40px;
`;

export const SafeArea = styled(SafeAreaView)`
	flex: 1;
`;

export const Subtitle = styled.Text`
	color: ${({ theme }) => theme.colors.textColor.inverted};
	opacity: 0.8;
	font-family: ${({ theme }) => theme.fonts.nunitoSans.regular};
	font-size: 32px;
	margin-bottom: 30px;
`;
