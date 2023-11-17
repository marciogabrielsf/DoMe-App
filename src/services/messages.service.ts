import { AxiosResponse } from "axios";
import api from "./api";

interface IResponse {
	message: string;
}

export async function sendMessage(message): Promise<IResponse> {
	try {
		const response = await api.post("/message", { message });
		return response.data;
	} catch (err) {
		console.log(err);
	}
}
