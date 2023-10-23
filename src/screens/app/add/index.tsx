import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import React, { useEffect } from "react";
import {
	Background,
	BottomTextBoxView,
	ContentView,
	KeyboardAvoid,
	MessageContainer,
	MicrophoneBarIcon,
	SendButtonIcon,
	SendButtonView,
	TextBox,
	TouchableButton,
} from "./styles";
import Message from "./components/message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
interface Messages {
	id: number;
	text: string;
	date: Date;
	fromDome?: boolean;
}

export default function AddPage() {
	const [text, setText] = React.useState("");
	const [messages, setMessages] = React.useState<Messages[]>([]);

	useEffect(() => {
		async function getAsyncStorageItems() {
			const response = await AsyncStorage.getItem("messages");
			if (response) {
				setMessages(JSON.parse(response || "[]"));
			}
		}
		getAsyncStorageItems();
	}, []);

	const sendMessage = () => {
		if (text.length > 0) {
			const newMessage = {
				id: messages.length + 1,
				text: text,
				date: new Date(),
				fromDome: false,
			};
			setMessages([...messages, newMessage]);
			setText("");
			AsyncStorage.setItem("messages", JSON.stringify([...messages, newMessage]));
		}
	};

	return (
		<Background>
			<KeyboardAvoid>
				<ContentView
					ref={(ref) => {
						this.scrollView = ref;
					}}
					onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}
				>
					<MessageContainer>
						{messages.map((message) => (
							<Message
								key={message.id}
								text={message.text}
								date={message.date}
								fromDome={message.fromDome}
							/>
						))}
					</MessageContainer>
				</ContentView>

				<BottomTextBoxView>
					<TextBox value={text} onChangeText={setText} />
					<TouchableButton>
						<MicrophoneBarIcon />
					</TouchableButton>
					<TouchableButton onPress={sendMessage}>
						<SendButtonView>
							<SendButtonIcon />
						</SendButtonView>
					</TouchableButton>
				</BottomTextBoxView>
			</KeyboardAvoid>
		</Background>
	);
}
