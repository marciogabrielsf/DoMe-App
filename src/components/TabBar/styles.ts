import styled from "styled-components/native";
import * as Icons from "@expo/vector-icons";

export const TabBarView = styled.View`
	height: 60px;
	position: absolute;
	bottom: 0;
	width: 100%;
	border-radius: 20px 20px 0 0;
	border: solid 1px #ffffff20;
	border-bottom-width: 0;
	flex-direction: row;
	justify-content: space-around;
	background-color: #30303075;
`;

export const TabBarButton = styled.TouchableOpacity`
	justify-content: center;
	width: 100px;
	align-items: center;
`;

export const TabBarLabel = styled.Text``;

export const TabBarIcon = styled(Icons.Ionicons)``;
