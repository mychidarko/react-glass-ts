export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
	size?: any;
	label?: string;
	placeholder?: string;
	name?: string;
	id?: string;
	value?: string | number | Date;
	defaultValue?: string;
	type?: "text" | "password" | "date" | "email" | "number";
	display?: "flex" | "block";
	onFocus?: (args: any) => void;
	onChange?: (args: any) => void;
	onBlur?: (args: any) => void;
	onKeyUp?: (args: any) => void;
	onKeyDown?: (args: any) => void;
	error?: string;
	showErrorMessage?: boolean;
	className?: string;
	disabled?: boolean;
	autocomplete?: "off" | "on" | "new-password";
	max?: number;
	min?: number;
	isRequired?: boolean;
	inputClassName?: string;
	inputType?: "input" | "textarea";
};