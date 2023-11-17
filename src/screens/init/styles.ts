import styled, { DefaultTheme } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import BackgroundVectorSVG from "@/assets/svgs/BackgroundVector.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { MotiView } from "moti";

export const Container = styled(LinearGradient as any).attrs(({ theme }: DefaultTheme) => ({
	colors: theme.colors.gradient.background,
	start: { x: 0.1, y: 0.1 },
	end: { x: 0.9, y: 0.9 },
}))`
	flex: 1;
	background-color: ${({ theme }: DefaultTheme) => theme.colors.purple[200]};
`;

export const SafeArea = styled(SafeAreaView)`
	flex: 1;
	justify-content: space-between;
	padding: 20px;
	z-index: 100;
`;

export const Title = styled.Text`
	font-size: 24px;
	color: ${({ theme }: DefaultTheme) => theme.colors.textColor.inverted};
	font-family: ${({ theme }: DefaultTheme) => theme.fonts.nunitoSans.bold};
`;

export const SubTextLine = styled.View`
	width: 100%;
	margin-top: 10px;
	border-radius: 10px;
	background-color: #fff;
	opacity: ${({ theme }: DefaultTheme) => theme.colors.glassTransparency};
	height: 3px;
`;

export const BackgroundVector = styled(BackgroundVectorSVG).attrs({
	width: "100%",
})`
	position: absolute;
	bottom: 0;
	flex: 1;
	width: 100px;
	height: 100px;
`;

export const Header = styled(MotiView)``;

export const Footer = styled(MotiView)`
	justify-self: flex-end;
	gap: 20px;
	padding-bottom: 50px;
`;

export const FooterText = styled.Text`
	font-size: 48px;
	font-family: ${({ theme }: DefaultTheme) => theme.fonts.nunitoSans.bold};
	color: ${({ theme }: DefaultTheme) => theme.colors.textColor.inverted};
`;
