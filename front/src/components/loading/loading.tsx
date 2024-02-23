import { PropsWithChildren } from "react";
import "./loading.css";
import { createPortal } from "react-dom";

export function Loading({}: LoadingProps) {
    return (
        <>
            {createPortal(
                <div className="loading" data-cy="loading">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={102}
                        height={40}
                    >
                        <g
                            fill="none"
                            fillRule="evenodd"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            transform="translate(2 1)"
                        >
                            <path
                                strokeWidth={3}
                                d="M47.293 2.375C52.927.792 54.017.805 54.017.805c2.613-.445 6.838-.337 9.42.237l8.381 1.863c2.59.576 6.164 2.606 7.98 4.531l6.348 6.732 6.245 1.877c3.098.508 5.609 3.431 5.609 6.507v4.206c0 .29-2.536 4.189-5.687 4.189H36.808c-2.655 0-4.34-2.1-3.688-4.67 0 0 3.71-19.944 14.173-23.902zM36.5 15.5h54.01"
                            />
                            <ellipse
                                cx={83.493}
                                cy={30.25}
                                fill="#FFF"
                                strokeWidth={3.2}
                                rx={6.922}
                                ry={6.808}
                            />
                            <ellipse
                                cx={46.511}
                                cy={30.25}
                                fill="#FFF"
                                strokeWidth={3.2}
                                rx={6.922}
                                ry={6.808}
                            />
                            <path
                                strokeWidth={3}
                                d="M22.5 16.5H2.475M20.5 23.5H.476M25.5 9.5h-19"
                            />
                        </g>
                    </svg>
                </div>,
                document.body
            )}
        </>
    );
}

type LoadingProps = PropsWithChildren<{}>;
