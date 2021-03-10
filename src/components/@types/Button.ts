import React from "react";

export interface ButtonProps {
    loading?: boolean;
    className?: string;
    children?: React.ReactChild[];
    loader?: React.Component | React.FC | JSX.Element | string,
    variant?: "rounded" | "outlined" | "raised" | "fab",
    color?: "red" | "transparent" | "blue" | "green" | "teal" | "gold" | "purple",
    icon?: React.Component | React.FC | JSX.Element | string,
    loaderColor?: string,
    loaderSize?: number,
    disabled?: boolean,
    [key: string]: any;
};