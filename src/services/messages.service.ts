import { AxiosResponse } from "axios";
import api from "./api";

interface IResponse {
	message: string;
}

export async function sendMessage(message): Promise<IResponse> {
	const response = await api.post("/messages", message);
	return response.data;
}
