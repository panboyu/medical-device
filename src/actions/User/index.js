import api from 'src/utils/api'
import { createAction } from 'redux-actions'

export const MANAGE_USER_FILTER = 'MANAGE_USER_FILTER'

export const CHECK_USER_LIST = 'CHECK_USER_LIST'

export const DEL_USER_LIST = 'DEL_USER_LIST'

export const BASE_USER_INFO = 'BASE_USER_INFO'

export const ADD_USER = 'ADD_USER'

export const GET_USER_INFO = 'GET_USER_INFO'

export const CHECK_PASS = 'CHECK_PASS'

export const RESET_PASSWORD = 'RESET_PASSWORD'

export const EDIT_USER = 'EDIT_USER'

export const GET_SINGLE_USER = 'GET_SINGLE_USER'

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'

export const GET_PERSONELINFO = 'GET_PERSONELINFO'

export const GET_UNCHECK_USER = 'GET_UNCHECK_USER'

/**
 * 用户查询
 * starttime
 * */
// 系统用户列表
export const userGetFilter = createAction(
    MANAGE_USER_FILTER,
    (params) => api.get('/accountinfo/userlist', params)
)
// 待审核用户列表数据
export const userGetCheck = createAction(
    CHECK_USER_LIST,
    (params) => api.get('/accountinfo/usercheck', params)
)
// 删除用户信息
export const delUserList = createAction(
    DEL_USER_LIST,
    (params) => api.post('/accountinfo/userlist-delete', params)
)
// 获取基本信息
export const baseUserInfo = createAction(
    ADD_USER,
    (params) => api.get('/accountinfo/baseinfo', params)
)
// 新增用户
export const addUser = createAction(
    ADD_USER,
    (params) => api.post('/accountinfo/userlist', params)
)
// 编辑用户数据回显
export const getUserInfo = createAction(
    GET_USER_INFO,
    (params) => api.post('/accountinfo/userlist', params)
)
// 审批通过
export const checkpass = createAction(
    CHECK_PASS,
    (params) => api.put('/accountinfo/usercheck', params)
)
// 重置密码
export const resetPassword = createAction(
    RESET_PASSWORD,
    (params) => api.put('/accountinfo/resetpwd', params)
)
// 编辑用户信息
export const editUser = createAction(
    EDIT_USER,
    (params) => api.put('/accountinfo/userlist', params)
)
// 编辑用户信息回显
export const getSingleUser = createAction(
    GET_SINGLE_USER,
    (params) => api.get('/accountinfo/user', params)
)
// 获取待审核用户个数
export const getUncheckUser = createAction(
    GET_UNCHECK_USER,
    (params,headers) => api.get('/accountinfo/usercheckcount', params,headers),
    () => {
        return { noMask: true }
    }
)

///////////////////////////////////////////
// 修改密码
export const changPassword = createAction(
    CHANGE_PASSWORD,
    (params) => api.put('/personalinfo/pwdchg', params)
)

//////////////////////////////////////////
//获取个人信息
export const getPersonelInfo = createAction(
    GET_PERSONELINFO,
    (params) => api.get('/personalinfo/detail', params)
)
//修改个人信息
export const changePersonelInfo = createAction(
    GET_PERSONELINFO,
    (params) => api.put('/personalinfo/detail', params)
)