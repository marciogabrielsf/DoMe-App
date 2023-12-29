import { MotiView } from "moti";
import styled  from "styled-components/native";

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
	background-color: ${({ theme }) => theme.colors.purple[400]};
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
	color: ${({ theme }) => theme.colors.textColor.inverted};
	font-family: ${({ theme }) => theme.fonts.nunitoSans.regular};
`;

export const HourDate = styled.Text`
	font-size: 10px;
	align-self: flex-end;
	color: #999999;
`;
