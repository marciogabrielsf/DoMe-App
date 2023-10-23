import { MotiView } from "moti";
import styled, { DefaultTheme } from "styled-components/native";

interface Messages {
	fromDome?: boolean;
}

export const MessageView = styled(MotiView)<Messages>`
	min-height: 30px;
	max-width: 80%;
	padding: 15px;
	border-radius: 10px;
	justify-content: center;
	align-items: flex-start;
	align-self: flex-end;
	background-color: ${({ theme }: DefaultTheme) => theme.colors.purple[400]};
	margin-top: 10px;

	${({ fromDome }: Messages) =>
		fromDome &&
		`
        background-color: #202020;
        align-self: flex-start;
    `}
`;

export const MessageText = styled.Text`
	font-size: 18px;
	color: ${({ theme }: DefaultTheme) => theme.colors.textColor.inverted};
	font-family: ${({ theme }: DefaultTheme) => theme.fonts.nunitoSans.regular};
`;
