import { IconsProps } from '../types';

export const IconMicrophone = ({ size, color }: IconsProps) => (
  <div style={{ display: `flex` }}>
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9_180)">
        <path
          d="M15.128 0C13.8623 0.0015877 12.649 0.505071 11.754 1.40003C10.8591 2.29498 10.3556 3.50834 10.354 4.774C10.361 4.988 10.383 5.201 10.419 5.412L10.282 5.274C10.166 5.15903 10.0267 5.07025 9.87348 5.01365C9.72027 4.95704 9.55671 4.93394 9.39382 4.94588C9.23093 4.95781 9.07249 5.00453 8.92917 5.08286C8.78585 5.1612 8.66099 5.26934 8.56299 5.4L0.460991 16.2C0.127443 16.6459 -0.0342213 17.197 0.00563612 17.7524C0.0454935 18.3078 0.284202 18.8303 0.677998 19.2239C1.0718 19.6176 1.59429 19.8561 2.1497 19.8958C2.70511 19.9355 3.25622 19.7737 3.70199 19.44L14.502 11.34C14.6326 11.242 14.7407 11.1171 14.8188 10.9737C14.897 10.8303 14.9434 10.6717 14.955 10.5088C14.9666 10.3459 14.943 10.1824 14.8859 10.0294C14.8288 9.87643 14.7395 9.73748 14.624 9.622L14.486 9.484C14.698 9.52 14.912 9.542 15.126 9.549C15.7529 9.549 16.3736 9.42553 16.9527 9.18564C17.5319 8.94575 18.0581 8.59413 18.5014 8.15087C18.9446 7.70761 19.2962 7.18139 19.5361 6.60224C19.776 6.02309 19.8995 5.40236 19.8995 4.7755C19.8995 4.14863 19.776 3.52791 19.5361 2.94876C19.2962 2.36961 18.9446 1.84339 18.5014 1.40013C18.0581 0.956865 17.5319 0.605252 16.9527 0.365361C16.3736 0.12547 15.7529 0.00199999 15.126 0.002L15.128 0ZM2.95499 18.445C2.74903 18.6026 2.49283 18.68 2.23405 18.6629C1.97527 18.6458 1.73152 18.5352 1.54814 18.3519C1.36475 18.1685 1.25421 17.9247 1.23708 17.6659C1.21994 17.4072 1.29738 17.151 1.45499 16.945L9.48699 6.239L13.662 10.415L2.95499 18.445ZM15.128 8.3C14.1918 8.3 13.2939 7.92809 12.6319 7.26609C11.9699 6.60408 11.598 5.70621 11.598 4.77C11.598 3.83379 11.9699 2.93592 12.6319 2.27391C13.2939 1.61191 14.1918 1.24 15.128 1.24C16.0642 1.24 16.9621 1.61191 17.6241 2.27391C18.2861 2.93592 18.658 3.83379 18.658 4.77C18.658 5.70621 18.2861 6.60408 17.6241 7.26609C16.9621 7.92809 16.0642 8.3 15.128 8.3ZM7.94199 11.08L10.018 9L10.898 9.88L8.82099 11.96L7.94199 11.08Z"
          fill={color ?? `black`}
        />
      </g>
    </svg>
  </div>
);
