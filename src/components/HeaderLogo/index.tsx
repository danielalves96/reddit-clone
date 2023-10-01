/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { testAlert } from 'src/utils/utils';

const HeaderLogo: React.FC = () => {
  return (
    <div
      className="pointer"
      onClick={() => testAlert()}
      data-testid="header-logo"
    >
      <img src="images/png/reddit.png" alt="Logo" height={60} />
    </div>
  );
};

export default HeaderLogo;
