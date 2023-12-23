import { useMessage } from "@/hooks/useMessage";
import { IUserData } from "@/services/messages.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import * as Haptics from "expo-haptics";
import Voice from "@react-native-voice/voice";
export interface Message {
	id: number;
	text: string;
	date: Date;
	fromDome?: boolean;
}

interface ConversationContextData {
	messages: Message[];
	isLoading: boolean;
	recordingResult: string;
	isRecording: boolean;
	startRecording(): Promise<void>;
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

	useEffect(() => {
		AsyncStorage.setItem("messages", JSON.stringify(messages));
	}, [messages]);

	useEffect(() => {
		Voice.onSpeechPartialResults = (e) => {
			setRecordingResult(e.value[0]);
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

	const sendMessage = async (text: string) => {
		try {
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
			setIsLoading(true);
			const newMessage = {
				id: messages.length + 1,
				text: text,
				date: new Date(),
				fromDome: false,
			};

			const temp = [newMessage, ...messages];
			setMessages(temp);

			const response = await mutateAsync({ message: text, user_data: userData });

			const newMessageDome = {
				id: temp.length + 1,
				text: response.message,
				date: new Date(),
				fromDome: true,
			};

			setMessages([newMessageDome, ...temp]);
			setUserData(response.user_data);
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
		} catch (err) {
			alert(err);
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
			await Voice.stop();
			setIsRecording(false);
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
