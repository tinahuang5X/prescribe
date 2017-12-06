import { compose } from 'recompose';
import { connect } from 'react-redux';

import CreatePtPage from '../../components/CreatePtPage';

import createPatientProcess from '../thunks/createPatientProcess';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onAddPt: ({ name, dob, phone, address }) =>
      dispatch(
        createPatientProcess({
          name,
          dob,
          phone,
          address
        }),
        ownProps.history
      )
  };
}

const connectToStore = connect(null, mapDispatchToProps);

// const onDidMount = lifecycle({
//   componentDidMount() {
//     this.props.onMount();
//   }
// });

export default compose(connectToStore)(CreatePtPage);
