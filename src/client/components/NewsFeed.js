import React from 'react';
import { wrapper, divider } from '../styles';
import Paging from './Paging';
import FeedTable from './FeedTable';

const NewsFeed = ({ hits, changePage }) => {
  return (
    <div style={wrapper}>
      <FeedTable hits={hits} />
      <Paging onPageChange={changePage} />
      <hr style={divider} />
    </div>
  );
};

export default NewsFeed;
