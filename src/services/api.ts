import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:5000",
	timeout: 5000 * 2,
});

api.defaults.timeoutErrorMessage = "Erro ao tentar conectar-se ao servidor.";

export default api;
