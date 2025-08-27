import type { CSSProperties } from "react";

export interface CustomInputProps {
	value: string;

	label?: string;
	placeholder?: string;

	disabled?: boolean;
	readonly?: boolean;
	required?: boolean;

	size?: "sm" | "md" | "lg";
	style?: CSSProperties;

	inputType?: "text" | "password" | "textarea" | "email";
	onChange?: (value: string) => void;
}
