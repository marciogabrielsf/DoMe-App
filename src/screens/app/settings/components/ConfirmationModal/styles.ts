import styled from "styled-components/native";
import theme from "@/themes/theme";

export const Container = styled.View`
	padding: 10px;
	gap: 10px;
	background-color: #fff;
`;

export const Message = styled.Text`
	font-size: 18px;
	margin-bottom: 20px;
	font-family: ${theme.fonts.nunitoSans.regular};
`;

export const ButtonContainer = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	padding: 15px;
	background-color: ${theme.colors.purple[200]};
	border-radius: 10px;
`;

export const ButtonText = styled.Text`
	color: ${theme.colors.textColor.inverted};
	font-family: ${theme.fonts.nunitoSans.bold};
`;

export const SecondaryButtonContainer = styled(ButtonContainer)`
	background-color: transparent;
`;

export const SecondaryButtonText = styled.Text``;
