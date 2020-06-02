import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPage } from '../actions';
// import './Page.css';

// In-line Styles to support SSR

const wrapper = {
  width: '100%',
  maxWidth: '1000px',
  margin: '1em auto',
  padding: '1em',
  boxSizing: 'border-box',
};

const isStriped = {
  backgroundColor: 'rgba(233, 200, 147, 0.2)',
  boxSizing: 'border-box',
};

const rtable = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '0 0 3em 0',
  padding: '0',
  boxShadow: '0 0 40px rgba(0, 0, 0, 0.2)',
  boxSizing: 'border-box',
};

const rtableRowHeader = {
  backgroundColor: '#ff6600',
  display: 'flex',
  boxSizing: 'border-box',
};

const rtableRow = {
  width: '100%',
  display: 'flex',
  fontSize: 'small',
  boxSizing: 'border-box',
};

const rtableCell = {
  boxSizing: 'border-box',
  flexGrow: '1',
  padding: '0.2em 0.4em',
  overflow: 'hidden',
  listStyle: 'none',
  boxSizing: 'border-box',
};

const columnHeading = {
  color: 'white',
  /* padding: 1em, */
  fontWeight: 'bold',
  textAlign: 'start',
  alignSelf: 'flex-end',
  boxSizing: 'border-box',
};

const commentCell = {
  width: '8%',
  boxSizing: 'border-box',
};

const countCell = {
  width: '6%',
  boxSizing: 'border-box',
};

const textCell = {
  width: '80%',
  boxSizing: 'border-box',
};

const footerContainer = {
  display: 'flex',
  justifyContent: 'flex-end',
  boxSizing: 'border-box',
};

const linkSeparator = {
  color: '#ff6600',
  fontWeight: 'bold',
  boxSizing: 'border-box',
};

const linkButton = {
  backgroundColor: 'transparent',
  fontWeight: 'bold',
  border: 'none',
  cursor: 'pointer',
  color: '#ff6600',
  display: 'inline',
  margin: '0',
  padding: '0',
  boxSizing: 'border-box',
};

const divider = {
  border: '1px solid #ff6600',
  boxSizing: 'border-box',
};

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 0 };
    this.changePage = this.changePage.bind(this);
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
    return (
      <>
        <div style={wrapper}>
          <div style={rtable}>
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
            {this.props.page.hits.map((item, index) => (
              <div
                key={item.objectID}
                style={index % 2 ? { ...rtableRow, ...isStriped } : rtableRow}
              >
                <div style={{ ...rtableCell, ...commentCell }}>
                  {item.num_comments}
                </div>
                <div style={{ ...rtableCell, ...countCell }}>{item.points}</div>
                <div style={{ ...rtableCell, ...countCell }}>
                  {/* <button>vote</button> */}
                  <a style={{ cursor: 'pointer' }}>
                    <div title='upvote' />
                  </a>
                </div>
                <div
                  style={{ ...rtableCell, ...textCell }}
                >{`${item.title} by ${item.author}`}</div>
              </div>
            ))}
          </div>
          <div style={footerContainer}>
            <div>
              <button
                style={linkButton}
                onClick={() => this.changePage('prev')}
              >
                Previous
              </button>{' '}
              <span style={linkSeparator}>|</span>{' '}
              <button
                style={linkButton}
                onClick={() => this.changePage('next')}
              >
                Next
              </button>
            </div>
          </div>
          <hr style={divider} />
        </div>
      </>
    );
  }
}
const mapStateToProps = ({ page }) => ({
  page,
});

const loadData = (store) => {
  return store.dispatch(fetchPage(0));
};

export { loadData };
export default connect(mapStateToProps, { fetchPage })(Page);
