import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPage } from '../actions';
import Graph from './Graph';
import NewsFeed from './NewsFeed';

// import {
//   wrapper,
//   isStriped,
//   rtable,
//   rtableRowHeader,
//   rtableRow,
//   rtableCell,
//   columnHeading,
//   commentCell,
//   countCell,
//   textCell,
//   footerContainer,
//   linkSeparator,
//   linkButton,
//   divider,
//   subtext,
//   hideButton,
// } from '../styles';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 0 };
    this.changePage = this.changePage.bind(this);
    // this.getHostName = this.getHostName.bind(this);
    // this.timeSince = this.timeSince.bind(this);
  }

  componentDidMount() {
    this.props.fetchPage(this.state.page);
  }

  changePage(direction) {
    if (this.state.page === 0 && direction === 'prev') {
    } else {
      if (direction === 'prev') {
        this.props.fetchPage(this.state.page - 1);
        this.setState({ page: this.state.page - 1 });
      } else {
        this.props.fetchPage(this.state.page + 1);
        this.setState({ page: this.state.page + 1 });
      }
    }
  }

  render() {
    const { hits } = this.props.page;
    const ids = hits.map((hit) => hit.objectID);
    const votes = hits.map((hit) => hit.points);

    return (
      <>
        <NewsFeed hits={hits} changePage={this.changePage} />
        <Graph ids={ids} votes={votes} />
      </>
    );

    // return (
    //   <>
    //     <div style={wrapper}>
    //       <div style={rtable}>
    //         <div style={{ ...rtableRow, ...rtableRowHeader }}>
    //           <div style={{ ...columnHeading, ...rtableCell, ...commentCell }}>
    //             Comments
    //           </div>
    //           <div style={{ ...columnHeading, ...rtableCell, ...countCell }}>
    //             Vote Count
    //           </div>
    //           <div style={{ ...columnHeading, ...rtableCell, ...countCell }}>
    //             UpVote
    //           </div>
    //           <div style={{ ...columnHeading, ...rtableCell, ...textCell }}>
    //             New Details
    //           </div>
    //         </div>
    //         {this.props.page.hits.map((item, index) => (
    //           <div
    //             key={item.objectID}
    //             style={index % 2 ? { ...rtableRow, ...isStriped } : rtableRow}
    //           >
    //             <div style={{ ...rtableCell, ...commentCell }}>
    //               {item.num_comments}
    //             </div>
    //             <div style={{ ...rtableCell, ...countCell }}>{item.points}</div>
    //             <div style={{ ...rtableCell, ...countCell }}>
    //               {/* <button>vote</button> */}
    //               <a style={{ cursor: 'pointer' }}>
    //                 <div title='upvote' />
    //               </a>
    //             </div>
    //             <div style={{ ...rtableCell, ...textCell }}>
    //               {`${item.title} (${this.getHostName(item.url)}) by ${
    //                 item.author
    //               } ${this.timeSince(item.created_at_i)} ago [ `}
    //               <a style={hideButton}>hide</a> {` ]`}
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //       <div style={footerContainer}>
    //         <div>
    //           <button
    //             style={linkButton}
    //             onClick={() => this.changePage('prev')}
    //           >
    //             Previous
    //           </button>{' '}
    //           <span style={linkSeparator}>|</span>{' '}
    //           <button
    //             style={linkButton}
    //             onClick={() => this.changePage('next')}
    //           >
    //             Next
    //           </button>
    //         </div>
    //       </div>
    //       <hr style={divider} />
    //     </div>
    //   </>
    // );
  }
}
const mapStateToProps = ({ page }) => ({
  page,
});

const loadData = (store) => {
  // returning 0 as the page for initial data load
  return store.dispatch(fetchPage(0));
};

export { loadData };
export default connect(mapStateToProps, { fetchPage })(Page);
