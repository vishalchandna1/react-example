import { connect } from 'react-redux';
import App from '../App'
import * as listActions from '../redux/modules/list'

const mapStateToProps = (state) => {
  return {
    data: state.list
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  orderList: ({oldIndex, newIndex}) => {
    dispatch(listActions.orderList(oldIndex, newIndex))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
