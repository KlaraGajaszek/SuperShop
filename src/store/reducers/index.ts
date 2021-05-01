import { combineReducers } from 'redux'

import { load } from './modalReducer'

export default combineReducers({
  modalReducer: load,
})
