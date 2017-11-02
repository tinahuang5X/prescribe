import { compose } from 'recompose';
import { connect } from 'react-redux';

import SignupPage from '../../components/SignupPage';

import doctorSignupProcess from '../thunks/doctorSignupProcess';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSignup: ({ firstName, lastName, email, password }) =>
      dispatch(doctorSignupProcess({ firstName, lastName, email, password }))
  };
}

const connectToStore = connect(null, mapDispatchToProps);

export default compose(connectToStore)(SignupPage);
