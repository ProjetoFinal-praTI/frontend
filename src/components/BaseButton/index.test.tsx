import { describe, expect, test } from "vitest";
import {
	render,
	screen,
	fireEvent,
	type RenderResult,
} from "@testing-library/react";

import { BaseButton, type BaseButtonProps } from ".";

const sut = (props: BaseButtonProps): RenderResult => {
	return render(<BaseButton {...props} />);
};

describe("BaseButton Component", () => {
	test("test renders", () => {
		const { getByText } = sut({ text: "Botão" });

		expect(getByText("Botão")).toBeTruthy();
	});

	test("test onClick", () => {
		// Arrange
		let counter = 0;

		const handleClick = () => {
			counter += 1;
		};

		// Act
		render(<BaseButton text="Button" onClick={handleClick} />);
		const button = screen.getByText("Button");

		fireEvent.click(button);

		// Assert
		expect(counter).toBe(1);
	});
});
