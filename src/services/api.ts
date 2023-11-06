import axios from "axios";

const api = axios.create({
	baseURL: "http://192.168.0.106:5000",
	timeout: 1000 * 100,
});

api.defaults.timeoutErrorMessage = "Erro ao tentar conectar-se ao servidor.";

export default api;