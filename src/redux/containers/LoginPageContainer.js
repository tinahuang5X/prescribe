import { compose } from 'recompose';
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
    onLogin: ({ email, password }) =>
      dispatch(doctorLoginProcess({ email, password }, ownProps.history))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);
export default compose(connectToStore)(LoginPage);
