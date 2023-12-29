import styled from "styled-components/native";

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
	color: ${(props) => props.theme.colors.textColor.inverted};
	font-size: 18px;
`;
