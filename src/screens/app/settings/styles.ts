import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
	padding: 15px;
	gap: 20px;
`;

export const Title = styled.Text`
	font-size: 24px;
	font-family: ${({ theme }) => theme.fonts.nunitoSans.bold};
	color: ${({ theme }) => theme.colors.textColor.inverted};
`;

export const Label = styled.Text`
	font-size: 16px;
	font-family: ${({ theme }) => theme.fonts.nunitoSans.bold};
	color: ${({ theme }) => theme.colors.textColor.inverted};
`;

export const ButtonLabel = styled.Text`
	color: ${({ theme }) => theme.colors.textColor.inverted};
	font-family: ${({ theme }) => theme.fonts.nunitoSans.bold};
`;

export const SettingSection = styled.View`
	gap: 10px;
`;
