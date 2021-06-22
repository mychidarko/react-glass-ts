import { Dict } from "../@types/Utils";

export function hasError(object: Object) {
	if (!object) {
		return;
	}
	const values = Object.values(object).filter((value) => {
		return value !== "" && value !== undefined;
	});

	return values.length > 0;
}

export function camelCaseToReadable(value: string) {
	var result = value.replace(/([A-Z])/g, " $1");
	return result.split("_").join(" ").toLowerCase();
};

export function resetObject(object: any) {
	const keys = Object.keys(object);
	keys.forEach((key) => {
		object[key] = "";
	});
	return { ...object };
};

export function objectHasProperty(object: Object, property: string) {
	return object.hasOwnProperty(property);
};

export const objectKeys = <T extends Dict>(obj: T) =>
	Object.keys(obj) as unknown as (keyof T)[];

// deep compare two object
export function isEqual(object1: any, object2: any) {
	const keys1 = Object.keys(object1);
	const keys2 = Object.keys(object2);

	if (keys1.length !== keys2.length) {
		return false;
	}

	for (const key of keys1) {
		const val1 = object1[key];
		const val2 = object2[key];
		const areObjects = isObject(val1) && isObject(val2);
		if (
			(areObjects && !isEqual(val1, val2)) ||
			(!areObjects && val1 !== val2)
		) {
			return false;
		}
	}

	return true;
};

export function isObject(object: any) {
	return object != null && typeof object === "object";
};
