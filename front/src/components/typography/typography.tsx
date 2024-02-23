import { ComponentProps } from "react";
import "./typography.css";
import classNames from "classnames";

export function H1({ children, ...props }: TypoProps) {
    return (
        <h1 {...props} className={classNames("h1", props.className)}>
            {children}
        </h1>
    );
}

export function H2({ children, ...props }: TypoProps) {
    return (
        <h2 {...props} className={classNames("h2", props.className)}>
            {children}
        </h2>
    );
}

export function H3({ children, ...props }: TypoProps) {
    return (
        <h3 {...props} className={classNames("h3", props.className)}>
            {children}
        </h3>
    );
}

export function H4({ children, ...props }: TypoProps) {
    return (
        <h4 {...props} className={classNames("h4", props.className)}>
            {children}
        </h4>
    );
}

export function H5({ children, ...props }: TypoProps) {
    return (
        <h5 {...props} className={classNames("h5", props.className)}>
            {children}
        </h5>
    );
}

export function H6({ children, ...props }: TypoProps) {
    return (
        <h6 {...props} className={classNames("h6", props.className)}>
            {children}
        </h6>
    );
}

type TypoProps = ComponentProps<"h1">;
