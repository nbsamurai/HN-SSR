import React from 'react';
import { footerContainer, linkButton, linkSeparator } from '../styles';

const Paging = ({ onPageChange }) => {
  return (
    <div style={footerContainer}>
      <div>
        <button style={linkButton} onClick={() => onPageChange('prev')}>
          Previous
        </button>{' '}
        <span style={linkSeparator}>|</span>{' '}
        <button style={linkButton} onClick={() => onPageChange('next')}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Paging;
