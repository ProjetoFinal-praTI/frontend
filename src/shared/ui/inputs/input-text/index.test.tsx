import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, type RenderResult } from "@testing-library/react";

import { CustomInput } from ".";
import type { CustomInputProps } from "./types";

const sut = (props: CustomInputProps): RenderResult => {
	return render(<CustomInput {...props} />);
};

describe("BaseButton Component", () => {
	test("render input", () => {
		const { getByTestId } = sut({ value: "Input" });

		expect(getByTestId("CustomInput-component-inputfield")).toBeTruthy();
	});

	test("render input label", () => {
		const { getByTestId } = sut({ value: "Input", label: "Label" });

		expect(getByTestId("CustomInput-component-label")).toBeTruthy();
	});

	test("not render input label", () => {
		const { queryByTestId } = sut({ value: "Input" });

		expect(queryByTestId("CustomInput-component-label")).toBeNull();
	});

	test("renders placeholder when provided", () => {
		const { getByPlaceholderText } = sut({
			value: "",
			placeholder: "Enter your name",
		});

		expect(getByPlaceholderText("Enter your name")).toBeTruthy();
	});

	test("input is disabled when disabled prop is true", () => {
		const { getByTestId } = sut({ value: "", disabled: true });

		expect(
			getByTestId("CustomInput-component-inputfield").hasAttribute(
				"disabled"
			)
		).toBe(true);
	});

	test("input is readonly when readonly prop is true", () => {
		const { getByTestId } = sut({ value: "", readonly: true });

		expect(
			getByTestId("CustomInput-component-inputfield").hasAttribute(
				"readonly"
			)
		).toBe(true);
	});

	test("input is required when required prop is true", () => {
		const { getByTestId } = sut({ value: "", required: true });

		const input = getByTestId("CustomInput-component-inputfield");
		expect(input.hasAttribute("required")).toBe(true);
	});

	test("input show * in label when is required", () => {
		const { getByTestId } = sut({
			value: "",
			required: true,
			label: "Label",
		});

		expect(
			getByTestId("CustomInput-component-label-required")
		).toBeTruthy();
	});

	test.each([["text"], ["password"], ["email"]])(
		"renders input of type %s",
		(type) => {
			const { getByTestId } = sut({
				value: "",
				inputType: type as "text" | "password" | "textarea" | "email",
			});

			const input = getByTestId("CustomInput-component-inputfield");
			expect(input.hasAttribute("type")).toBe(true);
		}
	);

	test("calls onChange when value changes", () => {
		const handleChange = vi.fn();

		const { getByTestId } = sut({ value: "", onChange: handleChange });

		const input = getByTestId("CustomInput-component-inputfield");

		fireEvent.change(input, { target: { value: "test" } });

		expect(handleChange).toHaveBeenCalled();
		expect(handleChange).toHaveBeenCalledWith("test");
	});
});
