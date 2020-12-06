import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import {
    MANAGE_USER_FILTER,
    CHECK_USER_LIST
} from 'actions/User/index'

const userInfo = handleActions({
    [MANAGE_USER_FILTER]: (state, { payload }) => payload,
}, null)

const userInfocheck = handleActions({
    [CHECK_USER_LIST]: (state, { payload }) => payload,
}, null)

export default combineReducers({
    userInfo,
    userInfocheck,
})