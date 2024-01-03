// App.jsx
import { BaseToastProps } from "react-native-toast-message";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";

const ToastContainer = styled.View<{ type: "neutral" | "error" | "success" }>`
	flex-wrap: wrap;
	flex-direction: row;
	gap: 6px;
	align-items: center;
	padding: 10px;
	background-color: ${({ theme, type }) => {
		switch (type) {
			case "neutral":
				return theme.colors.purple[200];
			case "error":
				return theme.colors.red[400];
			case "success":
				return theme.colors.green[200];
		}
	}};
	border-radius: 10px;
`;

const ToastText = styled.Text`
	color: ${({ theme }) => theme.colors.textColor.inverted};
	font-family: ${({ theme }) => theme.fonts.nunitoSans.bold};
`;

const ToastText2 = styled.Text`
	color: ${({ theme }) => theme.colors.textColor.gray[900]};
	font-family: ${({ theme }) => theme.fonts.nunitoSans.regular};
`;

/*
  1. Create the config
*/
export const toastConfig = {
	/*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
	success: (props) => (
		<ToastContainer type="success">
			<MaterialIcons name="check" size={24} color="#fff" />
			<ToastText>{props.text1}</ToastText>
			<ToastText2>{props.text2}</ToastText2>
		</ToastContainer>
	),

	/*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
	error: (props: BaseToastProps) => (
		<ToastContainer type="error">
			<MaterialIcons name="error-outline" size={24} color="#fff" />
			<ToastText>{props.text1}</ToastText>
			<ToastText2>{props.text2}</ToastText2>
		</ToastContainer>
	),
	/*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.
	
    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */

	neutral: (props: BaseToastProps) => (
		<ToastContainer type="neutral">
			<MaterialIcons name="message" size={24} color="#fff" />
			<View>
				<ToastText>{props.text1}</ToastText>
				<ToastText2>{props.text2}</ToastText2>
			</View>
		</ToastContainer>
	),
};
