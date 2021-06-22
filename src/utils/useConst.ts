import { useConstReturns } from "./@types/useConst";

function useConst(initial: any): useConstReturns {
	let variable = initial;

	console.log(variable, "var");

	const setVariable = (value: any) => {
		variable = value;

		console.log("setVariable", value, variable);
	};

	return [
		variable,
		setVariable
	];
};

export default useConst;