import api from "@/services/api";
import { IUserData, sendMessage } from "@/services/messages.service";
import { useMutation } from "react-query";

interface MessageProps {
	message: string;
	user_data: IUserData;
}

export function useMessage() {
	const data = useMutation(async (props: MessageProps) => {
		const response = await sendMessage(props.message, props.user_data);
		return response;
	});
	return data;
}
