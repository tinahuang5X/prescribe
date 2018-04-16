import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import LoginPage from '../../components/LoginPage';

import doctorLoginProcess from '../thunks/doctorLoginProcess';
//import getRxItemsProcess from '../thunks/getRxItemsProcess';
function mapStateToProps(state, ownProps) {
  return {
    errorType: state.errorType
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log('find', ownProps.history);

  return {
    //   onLogin: ({ email, password }) => {
    //     dispatch(
    //       doctorLoginProcess({ email, password }, ownProps.history)
    //     ).then(() => {
    //       dispatch(getRxItemsProcess());
    //     });
    //   }
    // };
    onMount: () =>
      dispatch({ type: 'REMOVE_LOGININFO_ERROR', errorType: null }),
    onLogin: ({ email, password }) => {
      dispatch(doctorLoginProcess({ email, password }, ownProps.history));
      dispatch({ type: 'REMOVE_LOGININFO_ERROR', errorType: null });
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);
const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});
export default compose(connectToStore, onDidMount)(LoginPage);
