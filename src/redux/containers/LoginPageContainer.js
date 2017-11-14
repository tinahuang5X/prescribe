import { compose } from 'recompose';
import { connect } from 'react-redux';

import LoginPage from '../../components/LoginPage';

import doctorLoginProcess from '../thunks/doctorLoginProcess';
import getRxItemsProcess from '../thunks/getRxItemsProcess';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onLogin: ({ email, password }) => {
      dispatch(doctorLoginProcess({ email, password })).then(() => {
        dispatch(getRxItemsProcess());
      });
    }
  };
}

const connectToStore = connect(null, mapDispatchToProps);
export default compose(connectToStore)(LoginPage);
