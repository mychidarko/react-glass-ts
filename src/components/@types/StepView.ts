export interface Navigator {
    next: React.MouseEventHandler<HTMLButtonElement>;
    prev: React.MouseEventHandler<HTMLButtonElement>;
    active: number;
    total: number;
};

export interface StepViewProps {
    children: any;
    value?: number;
    [key: string]: any;
};