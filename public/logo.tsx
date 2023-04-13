export interface svgProps {
  width?: string;
}

export function Logo({ width = "558px" }: svgProps) {
  return (
    <svg
      width={width}
      viewBox="0 0 558 564"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_303_2)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M339.172 1.48504C463.887 29.6443 557.177 143.153 557.177 278.918C557.177 435.856 432.533 563.078 278.778 563.078C125.023 563.078 0.378906 435.856 0.378906 278.918C0.378906 141.355 96.1528 26.6283 223.352 0.400469C352.679 -2.77399 424.615 89.3916 446.486 185.637C463.209 259.227 448.513 334.344 420.65 376.182C420.417 376.127 420.198 376.084 419.991 376.044C420.083 376.186 420.177 376.33 420.267 376.471C357.436 476.682 247.421 507.208 136.997 476.369C137.437 455.117 140.556 411.311 164.235 382.044C157.275 377.581 150.008 374.628 153.777 369.071C184.053 324.427 216.384 318.914 242.922 321.782C257.109 323.315 269.64 328.542 279.318 328.575C295.745 328.634 301.327 321.221 322.417 321.5C361.816 322.024 399.103 346.921 417.263 372.041L417.286 371.86C485.376 255.223 404.484 120.661 282.069 122.221C156.501 123.821 87.3553 255.423 136.213 352.548C101.086 377.802 78.6516 434.244 87.2844 476.94C246.668 583.126 413.507 492.164 467.66 361.177C528.069 215.058 482.778 35.0254 339.172 1.48296V1.48504ZM279.967 141.157C323.335 141.157 358.49 176.314 358.49 219.68C358.49 263.048 323.333 298.203 279.967 298.203C236.599 298.203 201.444 263.046 201.444 219.68C201.444 176.312 236.601 141.157 279.967 141.157Z"
          fill="#fff"
          stroke="none"
          strokeWidth="0.755029"
          strokeMiterlimit="22.9256"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_303_2">
          <rect width="557.556" height="563.456" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}