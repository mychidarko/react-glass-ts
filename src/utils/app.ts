/* eslint-disable no-param-reassign */

import { Obj, Dict } from "./types";

/**
 * Set the values of an object to a specific value;
 * Example form:{email: "email", password: "password"};
 * This method will return form:{email: "value to be assigned", password: "value to be assigned to"}
 * @param {Object} obj is the object in context
 * @param {String} value is the value to be assigned
 * */
export const objectSetValues = (obj: Obj, value: string) => {
	Object.keys(obj).forEach((index) => {
		obj[index] = value;
	});
};

/**
 * this method checks for the object with empty values and calls this 👆 method above
 * @param {Object} obj
 * @param {String} value
 */
export const checkAndEmptyObjVals = (obj: Obj, value: string) => {
	if (Object.values(obj).length > 0) {
		objectSetValues(obj, value);
	}
};

/**
 * This method capitalizes the first letter of a string.
 * @param {Sting} the string to capitalize the first letter
 */
export const ucFirst = (string: string) => (string ? string.charAt(0).toUpperCase() + string.slice(1) : "");

/** Sum object values by it's key
 * @param { Object } items - The object you would like to sum up.
 * Eg; { 'name': 'Elvis', 'age': '20' }, { 'name': 'Adjei', 'age': '30'}
 * @param { String } propToSum - The property to sum. Eg; "age"
 */
export const sum = (items: Obj, propToSum: string) => (
	items.reduce((x: any, y: any) => parseFloat(x) + parseFloat(y[propToSum]), 0)
);

/** Hide some portion of email. Example: na**********@gmail.com */
export const partiallyHideEmail = (email: string) => (
	email.replace(/(.{2})(.*)(?=@)/, (gp1, gp2, gp3) => {
		// eslint-disable-next-line no-plusplus
		for (let i = 0; i < gp3.length; i++) {
			gp2 += "*";
		}
		return gp2;
	})
);

export const showOnly = (maxText: number, input: string) => (
	input.length > maxText ? `${input.substring(0, maxText)}...` : input
);

export const meridifyTime = (time: any) => {
	// Check correct time format and split into components
	time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
		time,
	];

	if (time.length > 1) {
		// If time format correct
		time = time.slice(1); // Remove full string match value
		time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
		time[0] = +time[0] % 12 || 12; // Adjust hours
	}
	return time.join(""); // return adjusted time or original string
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

export function camelCaseToReadable(value: string) {
	var result = value.replace(/([A-Z])/g, " $1");
	return result.split("_").join(" ").toLowerCase();
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
