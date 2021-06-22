import { AxiosResponse } from "axios";

export interface HermesData {
	data?: any;
	url?: string;
	method?: "POST" | "GET" | "PUT";
	token?: string | null;
	options?: HermesOptions;
};

export interface HermesOptions {
	parseErr?: boolean;
	blockOffline?: boolean;
	smartRetry?: boolean;
	onAuthError?: (err?: any) => any;
	onServerError?: (err?: any) => any;
};

export type HookResponse = [
	response: Partial<AxiosResponse<any>>,
	loading: boolean,
	error: any,
];
