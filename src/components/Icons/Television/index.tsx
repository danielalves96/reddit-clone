import { IconsProps } from '../types';

export const IconTelevison = ({ size, color }: IconsProps) => (
  <div style={{ display: `flex` }}>
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9_119)">
        <path
          d="M10.375 15H5.625C4.92921 14.9987 4.2623 14.7217 3.7703 14.2297C3.27831 13.7377 3.00132 13.0708 3 12.375V7.625C3.00106 6.92913 3.27796 6.26207 3.77001 5.77001C4.26207 5.27796 4.92913 5.00106 5.625 5H10.375C11.0708 5.00132 11.7377 5.27831 12.2297 5.7703C12.7217 6.2623 12.9987 6.92921 13 7.625V12.375C12.9987 13.0708 12.7217 13.7377 12.2297 14.2297C11.7377 14.7217 11.0708 14.9987 10.375 15ZM5.625 6.25C5.26049 6.25053 4.91106 6.39556 4.65331 6.65331C4.39556 6.91106 4.25053 7.26049 4.25 7.625V12.375C4.25053 12.7395 4.39556 13.0889 4.65331 13.3467C4.91106 13.6044 5.26049 13.7495 5.625 13.75H10.375C10.7395 13.7495 11.0889 13.6044 11.3467 13.3467C11.6044 13.0889 11.7495 12.7395 11.75 12.375V7.625C11.7495 7.26049 11.6044 6.91106 11.3467 6.65331C11.0889 6.39556 10.7395 6.25053 10.375 6.25H5.625ZM16.29 7.33C16.48 7.142 16.587 6.887 16.59 6.62C16.5883 6.55624 16.5816 6.49272 16.57 6.43C16.5607 6.36377 16.5404 6.29956 16.51 6.24C16.4901 6.17854 16.4596 6.12102 16.42 6.07C16.3822 6.01237 16.3387 5.95876 16.29 5.91C16.1489 5.77542 15.9722 5.68412 15.7807 5.6469C15.5893 5.60968 15.3913 5.62811 15.21 5.7C15.0864 5.7459 14.9739 5.81747 14.88 5.91C14.8315 5.95637 14.7909 6.01043 14.76 6.07C14.7209 6.12304 14.6873 6.18002 14.66 6.24C14.637 6.302 14.62 6.365 14.61 6.43C14.5784 6.59066 14.5865 6.7566 14.6336 6.91342C14.6806 7.07025 14.7652 7.21324 14.88 7.33C14.9739 7.42253 15.0864 7.4941 15.21 7.54C15.3287 7.59605 15.4588 7.62345 15.59 7.62C15.8521 7.61783 16.1031 7.51384 16.29 7.33ZM15.78 10.6C15.846 10.59 15.91 10.57 15.97 10.54C16.0315 10.5201 16.089 10.4896 16.14 10.45C16.2765 10.3583 16.3888 10.2349 16.4672 10.0904C16.5455 9.94583 16.5877 9.78442 16.59 9.62C16.5883 9.55624 16.5816 9.49272 16.57 9.43C16.5607 9.36377 16.5404 9.29956 16.51 9.24C16.4901 9.17854 16.4596 9.12102 16.42 9.07C16.3822 9.01237 16.3387 8.95876 16.29 8.91C16.1489 8.77542 15.9722 8.68412 15.7807 8.6469C15.5893 8.60968 15.3913 8.62811 15.21 8.7C15.0864 8.7459 14.9739 8.81747 14.88 8.91C14.8315 8.95637 14.7909 9.01043 14.76 9.07C14.7209 9.12304 14.6873 9.18002 14.66 9.24C14.637 9.302 14.62 9.365 14.61 9.43C14.5784 9.59066 14.5865 9.7566 14.6336 9.91342C14.6806 10.0702 14.7652 10.2132 14.88 10.33C15.072 10.513 15.325 10.616 15.59 10.62C15.654 10.618 15.717 10.612 15.78 10.6ZM18.38 18H1.625C1.19419 17.9995 0.781168 17.8281 0.476536 17.5235C0.171904 17.2188 0.000529257 16.8058 0 16.375L0 3.625C0.000529257 3.19419 0.171904 2.78117 0.476536 2.47654C0.781168 2.1719 1.19419 2.00053 1.625 2H18.375C18.8058 2.00053 19.2188 2.1719 19.5235 2.47654C19.8281 2.78117 19.9995 3.19419 20 3.625V16.375C19.9995 16.8058 19.8281 17.2188 19.5235 17.5235C19.2188 17.8281 18.8058 17.9995 18.375 18H18.38ZM1.625 3.25C1.52554 3.25 1.43016 3.28951 1.35983 3.35983C1.28951 3.43016 1.25 3.52554 1.25 3.625V16.375C1.25 16.4745 1.28951 16.5698 1.35983 16.6402C1.43016 16.7105 1.52554 16.75 1.625 16.75H18.375C18.4745 16.75 18.5698 16.7105 18.6402 16.6402C18.7105 16.5698 18.75 16.4745 18.75 16.375V3.625C18.75 3.52554 18.7105 3.43016 18.6402 3.35983C18.5698 3.28951 18.4745 3.25 18.375 3.25H1.625Z"
          fill={color ?? `black`}
        />
      </g>
    </svg>
  </div>
);