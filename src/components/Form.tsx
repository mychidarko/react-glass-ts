import * as React from "react";
import { hasError } from "./utils";
import { FormProps } from "./@types/Form";

export const Form: React.FC<FormProps> = ({ form, onSubmit, children, ...rest }) => {
	// we use this errors state to handle the input focusing in the layout effect
	// not sure if this duplication is neccessary but it works so we leave it for now
	const [errors, setErrors] = React.useState({});

	function _submit(e: any) {
		if (!form) return;
		e.preventDefault();

		const errors = form.validateFields();

		setErrors(errors);

		if (!hasError(errors)) {
			return onSubmit(e, form.inputState);
		}
	}

	React.useEffect(() => {
		const errorInputs = document.querySelectorAll(".input-error");
		const errorInput: any = errorInputs[0];

		if (errorInput) {
			errorInput.focus();
		}
	}, [errors]);

	return <form onSubmit={_submit} {...rest}>{children}</form>;
};

export { default as Input } from "./Input";
export { default as useForm } from "./utils/hooks/useForm";

export default Form;
