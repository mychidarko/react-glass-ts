import React from "react";
import { InputProps } from "./@types/Input";

export const inputSizes = {
	sm: 32,
	md: 40,
	lg: 48,
	xl: 56,
};

const Input: React.FC<InputProps> = ({
	type = "",
	label,
	value,
	placeholder,
	onChange,
	className = "",
	onBlur,
	name,
	error,
	disabled,
	inputClassName,
	inputType = "input"
}) => {
	return (
		<div className={`${className} input-container`}>
			{label && <label className="input-label">{label}</label>}
			{inputType === "input" && (
				<input
					className={`input ${inputClassName}`}
					value={value as string}
					placeholder={placeholder}
					onChange={onChange}
					onBlur={onBlur}
					type={type}
					name={name}
					disabled={disabled}
				/>
			)}
			{inputType === "textarea" && (
				<textarea
					className={`input ${inputClassName}`}
					value={value as string}
					placeholder={placeholder}
					onChange={onChange}
					onBlur={onBlur}
					name={name}
					disabled={disabled}
				></textarea>
			)}
			{error && <small className="error-message">{error}</small>}
		</div>
	);
};

export default Input;
