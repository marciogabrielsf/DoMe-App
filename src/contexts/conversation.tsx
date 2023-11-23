import { Message } from "@/screens/app/add";
import { createContext } from "react";



interface ConversationContextData {
	messages: Message[];
	setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

export const ConversationContext = createContext<ConversationContextData>(
	{} as ConversationContextData
);
