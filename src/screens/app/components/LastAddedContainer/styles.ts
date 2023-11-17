import { LinearGradient } from "expo-linear-gradient";
import { Platform } from "react-native";
import styled from "styled-components/native";

export const Label = styled.Text`
	font-size: 22px;
	font-family: ${({ theme }) => theme.fonts.nunitoSans.regular};
	color: ${({ theme }) => theme.colors.textColor.inverted};
`;

export const Balance = styled.Text`
	font-size: 18px;
	font-family: ${({ theme }) => theme.fonts.nunitoSans.regular};
`;

export const LastAddedInfoView = styled.View``;

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	min-height: 60px;
	background-color: #b7b7b730;
	width: 100%;
	border-radius: 10px;
	padding: 15px;
	elevation: 5;
	border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const DateAdded = styled.Text`
	font-size: 18px;
	font-family: ${({ theme }) => theme.fonts.nunitoSans.regular};
	color: ${({ theme }) => theme.colors.textColor.inverted};
	opacity: 0.4;
`;
