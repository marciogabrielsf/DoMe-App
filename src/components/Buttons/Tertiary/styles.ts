import styled, { DefaultTheme } from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
	background-color: #90909050;
	border-radius: 10px;
	padding: 10px;
	gap: 6px;
	width: 100%;
	align-items: center;
	justify-content: center;
`;

export const ButtonText = styled.Text`
	color: ${({ theme }: DefaultTheme) => theme.colors.textColor.inverted};
	font-size: 18px;
`;
