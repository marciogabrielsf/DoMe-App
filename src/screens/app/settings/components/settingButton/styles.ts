import styled from "styled-components/native";

export const SettingContainer = styled.TouchableOpacity`
	flex-direction: row;
	padding: 10px;
	gap: 6px;
	align-items: center;
	height: 50px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.purple[400]};
`;
