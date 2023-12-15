import { useMessage } from "@/hooks/useMessage";
import { IUserData } from "@/services/messages.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

export interface Message {
	id: number;
	text: string;
	date: Date;
	fromDome?: boolean;
}

interface ConversationContextData {
	messages: Message[];
	isLoading: boolean;
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

	console.log(userData);

	const sendMessage = async (text: string) => {
		try {
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
		} catch (err) {
			alert(err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<ConversationContext.Provider value={{ messages, isLoading, sendMessage }}>
			{children}
		</ConversationContext.Provider>
	);
};

export const useConversation = () => {
	const context = useContext(ConversationContext);
	return context;
};
