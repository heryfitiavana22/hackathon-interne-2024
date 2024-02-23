import React, { PropsWithChildren } from "react";
import "./button.css";
import { AlertVariant } from "../../common.type";
import classNames from "classnames";

export function Button({
    children,
    variant = "primary",
    outline = false,
    onClick,
    disabled = false,
    className,
    size = "md",
    iconLeft,
    ...props
}: ButtonProps) {
    return (
        <button
            className={classNames(
                "btn",
                `btn-${variant}`,
                size,
                {
                    outline,
                    disabled,
                },
                className
            )}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {iconLeft}
            {children}
        </button>
    );
}

type ButtonProps = PropsWithChildren<{
    variant?: AlertVariant | "dark-primary";
    size?: "md" | "sm";
    outline?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    iconLeft?: React.ReactElement;
    "data-cy"?: string;
}>;
