import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPage } from '../actions';
import './Page.css';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 0 };
  }

  componentDidMount() {
    this.props.fetchPage(this.state.page);
  }

  render() {
    return (
      <>
        <div className='wrapper'>
          <div className='rtable'>
            <div className='rtable-row rtable-row-header'>
              <div className='column-heading rtable-cell comment-cell'>
                Comments
              </div>
              <div className='column-heading rtable-cell count-cell'>
                Vote Count
              </div>
              <div className='column-heading rtable-cell count-cell'>
                UpVote
              </div>
              <div className='column-heading rtable-cell text-cell'>
                New Details
              </div>
            </div>
            {this.props.page.hits.map((item, index) => (
              <div
                key={item.objectID}
                className={index % 2 ? 'rtable-row is-striped' : 'rtable-row'}
              >
                <div className='rtable-cell comment-cell'>
                  {item.num_comments}
                </div>
                <div className='rtable-cell count-cell'>{item.points}</div>
                <div className='rtable-cell count-cell'>
                  {/* <button>vote</button> */}
                  <a style={{ cursor: 'pointer' }}>
                    <div className='votearrow' title='upvote' />
                  </a>
                </div>
                <div className='rtable-cell text-cell'>{`${item.title} by ${item.author}`}</div>
              </div>
            ))}
          </div>
          <div className='footer-container'>
            <div>
              <button
                className='link-button'
                onClick={() => changePage('prev')}
              >
                Previous
              </button>{' '}
              <span className='link-separator'>|</span>{' '}
              <button
                className='link-button'
                onClick={() => changePage('next')}
              >
                Next
              </button>
            </div>
          </div>
          <hr className='divider' />
        </div>
      </>
    );
  }
}
const mapStateToProps = ({ page }) => ({
  page,
});

export default connect(mapStateToProps, { fetchPage })(Page);
