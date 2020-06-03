import React from 'react';
import {
  rtableRow,
  rtableCell,
  columnHeading,
  rtableRowHeader,
  commentCell,
  countCell,
  textCell,
} from '../styles';

const FeedHeader = () => {
  return (
    <>
      <div style={{ ...rtableRow, ...rtableRowHeader }}>
        <div style={{ ...columnHeading, ...rtableCell, ...commentCell }}>
          Comments
        </div>
        <div style={{ ...columnHeading, ...rtableCell, ...countCell }}>
          Vote Count
        </div>
        <div style={{ ...columnHeading, ...rtableCell, ...countCell }}>
          UpVote
        </div>
        <div style={{ ...columnHeading, ...rtableCell, ...textCell }}>
          New Details
        </div>
      </div>
    </>
  );
};

export default FeedHeader;
