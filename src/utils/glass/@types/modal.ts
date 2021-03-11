export interface ModalProps {
    name?: string;
    className?: string;
    close?: React.MouseEventHandler<any>;
    children: any;
    show?: boolean;
    size?: string;
};
