import React from 'react';
import FeedItem from './FeedItem';
import { rtableRow, isStriped } from '../styles';

const FeedDetails = ({ hits }) => {
  console.log(hits);
  return (
    <>
      {hits.map((item, index) => (
        <div
          key={item.objectID}
          style={index % 2 ? { ...rtableRow, ...isStriped } : rtableRow}
        >
          <FeedItem item={item} />
        </div>
      ))}
    </>
  );
};

export default FeedDetails;
