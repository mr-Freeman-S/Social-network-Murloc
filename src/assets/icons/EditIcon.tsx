import * as React from "react";
import { JSX } from "react/jsx-runtime";

export const EditIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        fill="#000000"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        id="edit"
        data-name="Line Color"
        xmlns="http://www.w3.org/2000/svg"
        className="icon line-color"
        {...props}
    >
        <line
            id="secondary"
            x1={21}
            y1={21}
            x2={3}
            y2={21}
            style={{
                fill: "none",
                stroke: "rgb(44, 169, 188)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
            }}
        />
        <path
            id="primary"
            d="M19.88,7,11,15.83,7,17l1.17-4,8.88-8.88A2.09,2.09,0,0,1,20,4,2.09,2.09,0,0,1,19.88,7Z"
            style={{
                fill: "none",
                stroke: "rgb(0, 0, 0)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
            }}
        />
    </svg>
);
