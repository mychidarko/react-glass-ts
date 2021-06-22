import { API_URL } from "@/config/constants";
import axios, { AxiosPromise, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { HermesData, HookResponse } from "./@types/hermes";

// our network system powered by the Olympian of god of transport

const baseUrl: string = API_URL;

export function hermes({
	data,
	url,
	method = "GET",
	token = null,
}: HermesData): AxiosPromise {
	const headers: any = {};
	const requestURL: string = `${baseUrl}${url}`;

	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}

	return axios({
		data,
		url: requestURL,
		method,
		headers,
		withCredentials: true,
	});
}

export function useHermes(
	url: string,
	options: Partial<HermesData>
): HookResponse {
	const [loading, setLoading] = useState(true);
	const [response, setResponse] = useState<Partial<AxiosResponse<any>>>({});
	const [error, setError] = useState(null);

	useEffect(() => {
		hermes({ url, ...options })
			.then((res) => {
				if (res.data) {
					setResponse(res);
				}

				setLoading(false);

				return;
			})
			.catch((err) => {
				if (err) {
					setError(err);
				}

				setLoading(false);

				return;
			});
	}, [url, options]);

	return [response, loading, error];
}

export function useGet(url: string) {
	return useHermes(url, {
		method: "GET",
	});
}

export function usePost(url: string, options: Partial<HermesData>) {
	return useHermes(url, {
		method: "POST",
		...options,
	});
}

export function usePut(url: string, options: Partial<HermesData>) {
	return useHermes(url, {
		method: "PUT",
		...options,
	});
}

// export function useGet(url: string): HookResponse {
// 	const [loading, setLoading] = useState(true);
// 	const [response, setResponse] = useState<Partial<AxiosResponse<any>>>({});
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		hermes({ url })
// 			.then((res) => {
// 				if (res.data) {
// 					setResponse(res);
// 				}

// 				setLoading(false);

// 				return;
// 			})
// 			.catch((err) => {
// 				if (err) {
// 					setError(err);
// 				}

// 				setLoading(false);

// 				return;
// 			});
// 	}, [url]);

// 	return [response, loading, error];
// }
