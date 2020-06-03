import React from 'react';
import { rtable } from '../styles';
import FeedHeader from './FeedHeader';
import FeedDetails from './FeedDetails';

const FeedTable = ({ hits }) => {
  return (
    <div style={rtable}>
      <FeedHeader />
      <FeedDetails hits={hits} />
    </div>
  );
};

export default FeedTable;
