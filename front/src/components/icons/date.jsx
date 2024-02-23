import * as React from "react"
const DateIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#46A758"
      strokeLinecap="round"
      strokeWidth={2}
      d="M20 10V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3m16 0v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9m16 0H4m4-7v4m8-4v4"
    />
    <rect width={3} height={3} x={6} y={12} fill="#46A758" rx={0.5} />
    <rect width={3} height={3} x={10.5} y={12} fill="#46A758" rx={0.5} />
    <rect width={3} height={3} x={15} y={12} fill="#46A758" rx={0.5} />
  </svg>
)
export default DateIcon