import { IconsProps } from '../types';

export const IconChevronUp = ({ size, color }: IconsProps) => (
  <div style={{ display: `flex` }}>
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 6.87502C10.0821 6.87495 10.1634 6.89107 10.2392 6.92248C10.3151 6.95388 10.384 6.99994 10.442 7.05802L15.442 12.058L14.558 12.942L10 8.38402L5.442 12.942L4.558 12.058L9.558 7.05802C9.61602 6.99994 9.68492 6.95388 9.76077 6.92248C9.83662 6.89107 9.91791 6.87495 10 6.87502Z"
        fill={color ?? `black`}
      />
    </svg>
  </div>
);
