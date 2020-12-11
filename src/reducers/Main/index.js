import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import {
    HOSPITAL_YEAR_INCOME,
} from 'actions/Main'

const yearIncome = handleActions({
    [HOSPITAL_YEAR_INCOME]: (state, { payload }) => payload
}, [])

export default combineReducers({
    yearIncome,
})