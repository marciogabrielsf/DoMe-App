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

export const Container = styled(LinearGradient as any).attrs(({ theme }) => ({
	colors: theme.colors.gradient.primary,
	start: { x: 0, y: 1 },
	end: { x: 0, y: 0 },
}))`
	background-color: #000;
	height: 110px;
	width: 100%;
	border-radius: 10px;
	box-shadow: ${Platform.OS === "ios" ? "0px 10px 20px rgba(0, 0, 0, 0.8)" : "none"};
	padding: 20px;
	elevation: 20;
	border: 1px solid rgba(255, 255, 255, 0.2);
	margin-bottom: 20px;
`;