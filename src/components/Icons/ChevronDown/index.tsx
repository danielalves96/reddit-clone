import { IconsProps } from '../types';

export const IconChevronDown = ({ size, color }: IconsProps) => (
  <div style={{ display: `flex` }}>
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 13.125C9.91791 13.1251 9.83661 13.109 9.76077 13.0776C9.68492 13.0462 9.61601 13.0001 9.558 12.942L4.558 7.94201L5.442 7.05801L10 11.616L14.558 7.05801L15.442 7.94201L10.442 12.942C10.384 13.0001 10.3151 13.0462 10.2392 13.0776C10.1634 13.109 10.0821 13.1251 10 13.125Z"
        fill={color ?? `black`}
      />
    </svg>
  </div>
);
