import { IconsProps } from '../types';

export const IconDots = ({ size, color }: IconsProps) => (
  <div style={{ display: `flex` }} data-testid="IconDots">
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.80001 8.00002C4.80001 8.42437 4.63144 8.83134 4.33138 9.13139C4.03132 9.43145 3.62435 9.60002 3.20001 9.60002C2.77566 9.60002 2.36869 9.43145 2.06864 9.13139C1.76858 8.83134 1.60001 8.42437 1.60001 8.00002C1.60001 7.57568 1.76858 7.16871 2.06864 6.86865C2.36869 6.5686 2.77566 6.40002 3.20001 6.40002C3.62435 6.40002 4.03132 6.5686 4.33138 6.86865C4.63144 7.16871 4.80001 7.57568 4.80001 8.00002ZM8.00001 6.40002C7.57566 6.40002 7.16869 6.5686 6.86864 6.86865C6.56858 7.16871 6.40001 7.57568 6.40001 8.00002C6.40001 8.42437 6.56858 8.83134 6.86864 9.13139C7.16869 9.43145 7.57566 9.60002 8.00001 9.60002C8.42435 9.60002 8.83132 9.43145 9.13138 9.13139C9.43143 8.83134 9.60001 8.42437 9.60001 8.00002C9.60001 7.57568 9.43143 7.16871 9.13138 6.86865C8.83132 6.5686 8.42435 6.40002 8.00001 6.40002ZM12.8 6.40002C12.3757 6.40002 11.9687 6.5686 11.6686 6.86865C11.3686 7.16871 11.2 7.57568 11.2 8.00002C11.2 8.42437 11.3686 8.83134 11.6686 9.13139C11.9687 9.43145 12.3757 9.60002 12.8 9.60002C13.2244 9.60002 13.6313 9.43145 13.9314 9.13139C14.2314 8.83134 14.4 8.42437 14.4 8.00002C14.4 7.57568 14.2314 7.16871 13.9314 6.86865C13.6313 6.5686 13.2244 6.40002 12.8 6.40002Z"
        fill={color ?? `black`}
      />
    </svg>
  </div>
);
