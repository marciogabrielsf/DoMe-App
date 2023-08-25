import { View, Text, KeyboardAvoidingView } from "react-native";
import React from "react";
import {
	Background,
	BottomTextBoxView,
	ContentView,
	KeyboardAvoid,
	MicrophoneBarIcon,
	SafeArea,
	TextBox,
	Title,
} from "./styles";

export default function AddPage() {
	return (
		<KeyboardAvoid>
			<Background>
				<SafeArea>
					<ContentView>
						<Title>Adicionar</Title>
					</ContentView>
				</SafeArea>
				<BottomTextBoxView>
					<TextBox />
					<MicrophoneBarIcon />
				</BottomTextBoxView>
			</Background>
		</KeyboardAvoid>
	);
}
