import { connect } from 'react-redux';

import App from '../App';
import { requestData } from '../redux/modules/api'

const mapStateToProps = (state) => {
  return {
    list: state.api.list,
  }
}

export default connect(mapStateToProps, { requestData })(App)
