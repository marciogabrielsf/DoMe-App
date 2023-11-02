import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import React, { useCallback, useEffect } from "react";
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
import { useMutation } from "react-query";
import { useMessage } from "@/hooks/useMessage";
interface Message {
	id: number;
	text: string;
	date: Date;
	fromDome?: boolean;
}

export default function AddPage() {
	const [text, setText] = React.useState("");
	const [messages, setMessages] = React.useState<Message[]>([]);

	const { data, isLoading, mutateAsync } = useMessage();

	const sendMessage = async () => {
		if (text.length > 0) {
			try {
				const newMessage = {
					id: messages.length + 1,
					text: text,
					date: new Date(),
					fromDome: false,
				};
				const temp = [...messages, newMessage];
				setMessages(temp);
				setText("");
				const response = (await mutateAsync({ message: text })).message;
				const newMessageDome = {
					id: temp.length + 1,
					text: response,
					date: new Date(),
					fromDome: true,
				};
				setMessages([...temp, newMessageDome]);
			} catch (err) {
				alert(err);
			}
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
