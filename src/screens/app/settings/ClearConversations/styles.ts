import styled from "styled-components/native";

export const MainText = styled.Text`
	color: ${({ theme }) => theme.colors.textColor.inverted};
	font-family: ${({ theme }) => theme.fonts.nunitoSans.bold};
	font-size: 26px;
`;

export const WarningMessage = styled.Text`
	color: ${({ theme }) => theme.colors.textColor.inverted};
	font-family: ${({ theme }) => theme.fonts.nunitoSans.regular};
	font-size: 16px;
	margin-bottom: 20px;
`;

export const Container = styled.View`
	margin-top: 15%;
	height: 100%;
	gap: 15px;
	padding: 10px;
`;
