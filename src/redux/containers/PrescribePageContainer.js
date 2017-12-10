import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import PrescribePage from '../../components/PrescribePage';
import getRxItemsProcess from '../thunks/getRxItemsProcess';

function mapStateToProps(state, ownProps) {
  return {
    RxItems: state.RxItems
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getRxItemsProcess()),
    onLogout: () => dispatch({ type: 'REMOVE_MDINFO', doctorInfo: null })
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(PrescribePage);
