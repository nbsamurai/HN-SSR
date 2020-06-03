import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPage } from '../actions';
import Graph from './Graph';
import NewsFeed from './NewsFeed';

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
    const { hits } = this.props.page;
    const ids = hits.map((hit) => hit.objectID);
    const votes = hits.map((hit) => hit.points);

    return (
      <>
        <NewsFeed hits={hits} changePage={this.changePage} />
        <Graph ids={ids} votes={votes} />
      </>
    );
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
