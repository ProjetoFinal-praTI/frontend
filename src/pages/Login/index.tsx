

import type { JSX } from "react";
import "./styles.css";
import ProgressBar from "@/components/ProgressBar";




export const Login = (): JSX.Element => {
	return (
		<div className="login_page_container">
			<h1>Página de Login</h1>
			<h2>Ainda não implementada</h2>

			<div className="mt-6 w-64">
				<ProgressBar value={60} showLabel />
			</div>
		</div>
	);
};
