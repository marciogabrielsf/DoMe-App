import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled(LinearGradient as any).attrs(({ theme }) => ({
	colors: theme.colors.gradient.background,
	start: { x: 0.1, y: 0.1 },
	end: { x: 0.9, y: 0.9 },
}))`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.purple[200]};
`;
