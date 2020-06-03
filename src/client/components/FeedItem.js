import React from 'react';
import {
  rtableCell,
  countCell,
  commentCell,
  hideButton,
  textCell,
} from '../styles';

const FeedItem = ({ item }) => {
  const getHostName = (url) => {
    if (url) {
      return url
        .replace('http://', '')
        .replace('https://', '')
        .replace('www.', '')
        .split(/[/?#]/)[0];
    }
    return '';
  };

  const timeSince = (inputDate) => {
    const date = new Date(Date.now() - inputDate);
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + ' years';
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + ' months';
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + ' days';
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + ' hours';
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + ' minutes';
    }
    return Math.floor(seconds) + ' seconds';
  };

  return (
    <>
      <div style={{ ...rtableCell, ...commentCell }}>{item.num_comments}</div>
      <div style={{ ...rtableCell, ...countCell }}>{item.points}</div>
      <div style={{ ...rtableCell, ...countCell }}>
        {/* <button>vote</button> */}
        <a style={{ cursor: 'pointer' }}>
          <div title='upvote' />
        </a>
      </div>
      <div style={{ ...rtableCell, ...textCell }}>
        {`${item.title} (${getHostName(item.url)}) by ${
          item.author
        } ${timeSince(item.created_at_i)} ago [ `}
        <a style={hideButton}>hide</a> {` ]`}
      </div>
    </>
  );
};

export default FeedItem;
