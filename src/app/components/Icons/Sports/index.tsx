import { IconsProps } from '../types';

export const IconSports = ({ size, color }: IconsProps) => (
  <div style={{ display: `flex` }}>
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9_113)">
        <path
          d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34873 18.9426 4.80688 17.0679 2.93215C15.1931 1.05742 12.6513 0.0029116 10 0ZM4.124 16.465L5.383 13.458C6.31062 11.2449 6.40336 8.77032 5.644 6.494L4.458 6.894C5.122 8.88361 5.04098 11.0466 4.23 12.981L3.184 15.481C2.14907 14.1953 1.49885 12.6432 1.30843 11.0037C1.11802 9.3643 1.39516 7.70444 2.10786 6.21579C2.82057 4.72714 3.93977 3.47042 5.33625 2.59072C6.73274 1.71103 8.34954 1.24423 10 1.24423C11.6505 1.24423 13.2673 1.71103 14.6638 2.59072C16.0602 3.47042 17.1794 4.72714 17.8921 6.21579C18.6048 7.70444 18.882 9.3643 18.6916 11.0037C18.5012 12.6432 17.8509 14.1953 16.816 15.481L15.77 12.981C14.959 11.047 14.878 8.88427 15.542 6.895L14.356 6.495C13.5967 8.77132 13.6894 11.2459 14.617 13.459L15.876 16.466C14.2717 17.9351 12.1752 18.7499 9.99981 18.7497C7.82446 18.7495 5.72809 17.9344 4.124 16.465Z"
          fill={color ?? `black`}
        />
      </g>
    </svg>
  </div>
);
