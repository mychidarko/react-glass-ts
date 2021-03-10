export interface NotifyProps {
    title?: string;
    body: JSX.Element | string;
    type?: "default" | "error" | "success" | "warning" | "info";
};