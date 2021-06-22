export interface FormProps
	extends React.DetailedHTMLProps<
		React.FormHTMLAttributes<HTMLFormElement>,
		HTMLFormElement
	> {
	form: UseFormOutput;
	onSubmit: any;
};

export interface UseFormOutput {
	inputState: FormFields;
	errors: FormFields;
	validateField(e?: any): void;
	setInputField: (name: string, value: string) => void;
	onChange(e?: any): void;
	onBlur(e?: any): void;
	initializeForm(form: FormFields): void;
	setInputState(input: any): void;
	validateFields(): any;
	resetForm(): void;
	resetFormToInitialState(): void;
	updateInitialState(state: any): void;
	hasFormStateChanged(): boolean;
}

export type FormFields = Record<string, any>;

export interface FormConfig {
	fields: FormFields;
	optional?: string[];
}
