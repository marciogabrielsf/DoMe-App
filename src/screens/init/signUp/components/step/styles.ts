import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.textColor.inverted};
	font-family: ${({ theme }) => theme.fonts.nunitoSans.bold};
	font-size: 32px;
`;

export const TitleContainer = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	margin-bottom: 20px;
`;

export const SafeArea = styled(SafeAreaView)`
	flex: 1;
`;

export const SubTitle = styled.Text`
	color: ${({ theme }) => theme.colors.textColor.inverted};
	opacity: 0.8;
	font-family: ${({ theme }) => theme.fonts.nunitoSans.regular};
	font-size: 32px;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
	behavior: "padding",
})`
	flex: 1;
	padding: 20px;
	gap: 20px;
	justify-content: center;
`;

export const InputContainer = styled.View`
	width: 100%;
`;

export const InputLabel = styled.Text`
	font-size: 20px;
	color: ${({ theme }) => theme.colors.textColor.inverted};
	font-family: ${({ theme }) => theme.fonts.nunitoSans.regular};
`;

export const InputBox = styled.TextInput.attrs({
	placeholderTextColor: "#fff",
})`
	background-color: ${({ theme }) => theme.colors.gray[900]}60px;
	border-radius: 10px;
	padding: 13px;
	color: ${({ theme }) => theme.colors.textColor.inverted};
	font-family: ${({ theme }) => theme.fonts.nunitoSans.regular};
	width: 100%;
`;
