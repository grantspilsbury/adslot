import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSearch } from '../actions/searchActions';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateSearch
    },
    dispatch
  );

const mapStateToProps = ({ search }) => {
  return {
    term: search.term
  };
};

export const searchConnector = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);
