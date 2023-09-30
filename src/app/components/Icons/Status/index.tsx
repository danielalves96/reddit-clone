import { IconsProps } from '../types';

export const IconStatus = ({ size, color }: IconsProps) => (
  <div style={{ display: `flex` }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 6 6"
      fill="none"
    >
      <circle cx="3" cy="3" r="3" fill={color ?? `#78C277`} />
    </svg>
  </div>
);
