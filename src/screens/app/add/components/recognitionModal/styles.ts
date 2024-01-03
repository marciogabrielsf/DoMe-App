import { MotiText, MotiView } from "moti";
import styled from "styled-components/native";

export const Content = styled.View`
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors.purple[400]};
`;

export const Message = styled(MotiText)`
	color: ${({ theme }) => theme.colors.textColor.inverted};
	font-size: 20px;
	padding: 0px 3px 0px 3px;
	font-family: ${({ theme }) => theme.fonts.nunitoSans.bold};
`;

export const MessageContainer = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	padding: 20px;
`;

export const ButtonContainer = styled(MotiView)`
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	opacity: 100;
	height: 100%;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

export const Separator = styled.View`
	height: 100%;
	width: 3px;
	background-color: ${({ theme }) => theme.colors.purple[400]};
`;

export const CancelButton = styled.TouchableOpacity`
	height: 100%;
	background-color: ${({ theme }) => theme.colors.purple[600]};
	justify-content: center;
	align-items: center;
	overflow: hidden;
	flex: 0.5;
`;

export const ConfirmButton = styled.TouchableOpacity`
	height: 100%;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	flex: 0.5;
	background-color: ${({ theme }) => theme.colors.purple[600]};
`;

export const BottomContainer = styled.View`
	height: 60px;
`;

export const ConfirmText = styled.Text``;
