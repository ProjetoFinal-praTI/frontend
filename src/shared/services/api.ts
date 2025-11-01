import axios from "axios";

const BASE_API = process.env.BASE_API;

export const api = axios.create({
	baseURL: BASE_API,
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
		// Authorization: `Bearer ${BEARER_TOKEN}`, // Sem autenticação ainda
	},
});
