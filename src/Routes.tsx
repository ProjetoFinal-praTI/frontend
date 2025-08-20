import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";

export const RoutesManager = () => {
	return (
		<Routes>
			<Route index element={<Login />} />
		</Routes>
	);
};
