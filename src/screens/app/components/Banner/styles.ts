import styled from "styled-components/native";

export const Container = styled.View`
	background-color: #ffffff20;
	padding: 20px;
	height: 200px;
	border: solid 1px #ffffff40;
	border-radius: 10px;
	flex-direction: column;
	justify-content: space-between;
`;

export const DomeTitle = styled.Text`
	font-size: 18px;
	font-family: ${({ theme }) => theme.fonts.nunitoSans.bold};
	color: ${({ theme }) => theme.colors.textColor.inverted};
`;
export const Content = styled.View`
	flex-direction: column;
`;
export const DomeMessage = styled.Text`
	font-family: ${({ theme }) => theme.fonts.nunitoSans.regular};
	font-size: 22px;
	color: ${({ theme }) => theme.colors.textColor.inverted};
`;

export const CustomButton = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.colors.purple[400]};
	border-radius: 10px;
	padding: 10px;
	margin-top: 10px;
	align-items: center;
	justify-content: center;
`;

export const ButtonsView = styled.View`
	flex-direction: row;
	gap: 10px;
`;
