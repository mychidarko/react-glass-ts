import React from "react";

export interface ButtonProps {
    loading?: boolean;
    className?: string;
    children?: any;
    loader?: React.Component | React.FC | JSX.Element | string,
    variant?: "rounded" | "outlined" | "raised" | "fab",
    color?: "red" | "transparent" | "blue" | "green" | "teal" | "gold" | "purple" | "default",
    icon?: React.Component | React.FC | JSX.Element | string,
    loaderColor?: string,
    loaderSize?: number,
    disabled?: boolean,
    [key: string]: any;
};