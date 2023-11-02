import api from "@/services/api";
import { sendMessage } from "@/services/messages.service";
import { useMutation } from "react-query";

interface MessageProps {
	message: string;
}

export function useMessage() {
	const data = useMutation(async (props: MessageProps) => {
		const response = await sendMessage(props.message);
		return response;
	});

	return data;
}
