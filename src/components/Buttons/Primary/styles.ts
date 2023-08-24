import { LinearGradient } from "expo-linear-gradient";
import styled, { DefaultTheme } from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
`;
export const ButtonGradient = styled(LinearGradient).attrs(({ theme }: DefaultTheme) => ({
	colors: theme.colors.gradient.primary,
	start: { x: 0, y: 0 },
	end: { x: 1, y: 0 },
}))`
	height: 50px;
	border-radius: 10px;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);

	align-items: center;
	justify-content: center;
	border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const ButtonText = styled.Text`
	color: ${({ theme }: DefaultTheme) => theme.colors.textColor.inverted};

	font-size: 18px;
`;
