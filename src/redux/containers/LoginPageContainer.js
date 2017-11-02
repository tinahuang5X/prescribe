import { compose } from 'recompose';
import { connect } from 'react-redux';

import LoginPage from '../../components/LoginPage';

import doctorLoginProcess from '../thunks/doctorLoginProcess';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onLogin: ({ email, password }) =>
      dispatch(doctorLoginProcess({ email, password }))
  };
}

const connectToStore = connect(null, mapDispatchToProps);

export default compose(connectToStore)(LoginPage);
