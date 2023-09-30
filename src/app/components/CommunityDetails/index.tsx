import React from 'react';
import styles from './styles.module.scss';

const CommunityDetails: React.FC = () => {
  return (
    <div className={styles.cdHeight}>
      <div className={styles.cdSpacing}>
        <div
          style={{
            backgroundColor: 'orange',
          }}
        >
          Teste
        </div>
      </div>
    </div>
  );
};

export default CommunityDetails;
