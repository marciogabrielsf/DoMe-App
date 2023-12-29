import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
`;

export const ButtonText = styled.Text`
	color: ${({ theme }) => theme.colors.textColor.inverted};
	font-size: 18px;
`;
