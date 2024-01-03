import { useMessage } from "@/hooks/useMessage";
import { IUserData } from "@/services/messages.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import * as Haptics from "expo-haptics";
import Voice from "@react-native-voice/voice";
import { Message } from "@/interfaces/Message";
import Toast from "react-native-toast-message";

interface ConversationContextData {
	messages: Message[];
	isLoading: boolean;
	recordingResult: string;
	isRecording: boolean;
	startRecording(): Promise<void>;
	clearChat(): Promise<void>;
	clearRecording(): Promise<void>;
	endRecoding(): Promise<void>;
	sendMessage(message: string): Promise<void>;
}

export const ConversationContext = createContext<ConversationContextData>(
	{} as ConversationContextData
);

type ConversationProviderProps = {
	children: React.ReactNode;
};

export const ConversationProvider = ({ children }: ConversationProviderProps) => {
	const [messages, setMessages] = useState<Message[]>([]);
	const [userData, setUserData] = useState<IUserData>({ chat_id: 12345 } as IUserData);
	const [isRecording, setIsRecording] = useState(false);
	const [recordingResult, setRecordingResult] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const { mutateAsync } = useMessage();

	useEffect(() => {
		const loadStoredMessages = async () => {
			setIsLoading(true);
			const messages = await AsyncStorage.getItem("messages");
			if (messages) {
				setMessages(JSON.parse(messages));
			}
			setIsLoading(false);
		};
		loadStoredMessages();
	}, []);

	let timeout: NodeJS.Timeout = null;
	useEffect(() => {
		Voice.onSpeechPartialResults = (e) => {
			setRecordingResult(e.value[0]);
			if (timeout) {
				clearTimeout(timeout);
			}
			timeout = setTimeout(endRecoding, 1000);
		};
		Voice.onSpeechResults = (e) => {
			setRecordingResult(e.value[0]);
		};
		Voice.onSpeechEnd = () => {
			setIsRecording(false);
		};

		Voice.onSpeechError = () => {
			setIsRecording(false);
		};
		return () => {
			Voice.destroy().then(Voice.removeAllListeners);
		};
	}, []);

	async function addMessage(message: string, fromDome: boolean = false) {
		const newMessage = {
			id: messages.length + 1,
			text: message,
			date: new Date(),
			fromDome: fromDome,
		};
		const temp = messages;
		temp.unshift(newMessage);
		setMessages(temp);
		AsyncStorage.setItem("messages", JSON.stringify(messages));
	}

	const sendMessage = async (text: string) => {
		try {
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
			setIsLoading(true);

			await addMessage(text);
			const response = await mutateAsync({ message: text, user_data: userData });
			await addMessage(response.message, true);

			setUserData(response.user_data);
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
		} catch (err) {
			addMessage(`An error has ocurred:\n${err.message}`, true);
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
		} finally {
			setIsLoading(false);
		}
	};

	const clearRecording = async () => {
		try {
			setRecordingResult("");
			Voice.destroy().then(Voice.removeAllListeners);
		} catch (err) {
			alert(err);
		}
	};

	const startRecording = async () => {
		try {
			setIsRecording(true);
			await Voice.start("en-US");
		} catch (err) {
			alert(err);
		}
	};

	const endRecoding = async () => {
		try {
			if (timeout) {
				clearTimeout(timeout);
			}
			await Voice.stop();
			setIsRecording(false);
		} catch (err) {
			alert(err);
		}
	};

	const clearChat = async () => {
		try {
			setMessages([]);
			AsyncStorage.setItem("messages", JSON.stringify([]));
		} catch (err) {
			alert(err);
		}
	};

	return (
		<ConversationContext.Provider
			value={{
				messages,
				clearRecording,
				isLoading,
				sendMessage,
				startRecording,
				endRecoding,
				recordingResult,
				isRecording,
				clearChat,
			}}
		>
			{children}
		</ConversationContext.Provider>
	);
};

export const useConversation = () => {
	const context = useContext(ConversationContext);
	return context;
};
