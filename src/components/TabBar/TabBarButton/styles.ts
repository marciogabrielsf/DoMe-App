import styled  from "styled-components/native";

export const TabBarView = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const TabBarButton = styled.TouchableOpacity`
	flex: 1;
`;

export const TabBarLabel = styled.Text`
	color: ${({ theme }) => theme.colors.textColor.inverted};
`;
