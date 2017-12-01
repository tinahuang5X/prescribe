import { compose } from 'recompose';
//import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import SignupPage from '../../components/SignupPage';

import doctorSignupProcess from '../thunks/doctorSignupProcess';

function mapStateToProps(state, ownProps) {
  return {
    errorType: state.errorType
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log('hello', dispatch, ownProps);
  return {
    // onMount: () => {
    //   localStorage.removeItem('message');
    // },
    onSignup: ({ firstName, lastName, email, password }) =>
      dispatch(
        doctorSignupProcess(
          { firstName, lastName, email, password },
          ownProps.history
        )
      )
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// const onDidMount = lifecycle({
//   componentDidMount() {
//     this.props.onMount();
//   }
// });

export default compose(connectToStore)(SignupPage);
//export default compose(connectToStore, onDidMount)(SignupPage);
