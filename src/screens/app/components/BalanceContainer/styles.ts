import { LinearGradient } from "expo-linear-gradient";
import { Platform } from "react-native";
import styled from "styled-components/native";

export const Label = styled.Text`
	font-size: 22px;
	font-family: ${({ theme }) => theme.fonts.nunitoSans.regular};
	color: ${({ theme }) => theme.colors.textColor.inverted};
`;

export const CategoryText = styled.Text`
	font-size: 16px;
	color: ${({ theme }) => theme.colors.textColor.gray[900]};
	font-family: ${({ theme }) => theme.fonts.nunitoSans.regular};
`;

export const SubTitle = styled.Text`
	font-size: 16px;
	color: ${({ theme }) => theme.colors.textColor.inverted};
	opacity: 0.5;
	font-family: ${({ theme }) => theme.fonts.nunitoSans.regular};
`;

export const TitleContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const Divider = styled.View`
	width: 100%;
	height: 1px;
	border-radius: 999px;
	margin-top: 10px;
	margin-bottom: 10px;
	background-color: #fff;
`;

export const LabelContainer = styled.View`
	flex-direction: row;
	gap: 6px;
	align-items: center;
`;

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.purple[400]};
	width: 100%;
	border-radius: 10px;
	box-shadow: ${Platform.OS === "ios" ? "0px 5px 10px rgba(0, 0, 0, 0.15)" : "none"};
	padding: 20px;
	elevation: 10;
`;
