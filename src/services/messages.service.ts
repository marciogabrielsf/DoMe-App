import api from "./api";

export interface IMessageResponse {
	message: string;
	user_data: {
		chat_id: number;
		email: string;
		id: number;
		name: string;
		pending_attributes: object;
		pending_class: string | null;
		pending_intent: string | null;
		pending_where_clause: object;
		previous_attributes: object;
		previous_class: string;
		previous_intent: string;
		previous_where_clause: object;
	};
}

export type IUserData = IMessageResponse["user_data"];

export async function sendMessage(
	message: string,
	user_data: IUserData
): Promise<IMessageResponse> {
	try {
		const response = await api.post("/message", { message, user_data });
		delete response.data.user_data.session_expiration_time;
		return response.data;
	} catch (err) {
		console.log(err);
		throw err;
	}
}
