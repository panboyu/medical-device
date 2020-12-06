import api from 'src/utils/api'
import { createAction } from 'redux-actions'

export const APP_SIDER = 'APP_SIDER'
export const APP_SHOW_LOADING = 'APP_SHOW_LOADING'
export const APP_CLOSE_LOADING = 'APP_CLOSE_LOADING'
export const APP_LINE_INFO = 'APP_LINE_INFO'
export const APP_WEBSOCKET_LINE = 'APP_WEBSOCKET_LINE'
export const APP_MACHINE_INFO = 'APP_MACHINE_INFO'
export const APP_WEBSOCKET_MACHINE = 'APP_WEBSOCKET_MACHINE'
export const APP_CUTTERTYPE_INFO = 'APP_CUTTERTYPE_INFO'
export const GET_PERSONELINFO = 'GET_PERSONELINFO'
export const GET_REMIND_INFO = 'GET_REMIND_INFO'
export const GET_REMIND_INFO_LIST = 'GET_REMIND_INFO_LIST'
export const ALL_WARN_COUNT = 'ALL_WARN_COUNT'
export const ALL_WARN = 'ALL_WARN'
export const TOOL_MACHINE_USELIFE = 'TOOL_MACHINE_USELIFE'
export const APP_UPDATE_CURRENT = 'APP_UPDATE_CURRENT'
export const APP_UPDATE_TOOLRUL = 'APP_UPDATE_TOOLRUL'



// 显示/隐藏顶层loading bar
export const showLoadingBar = createAction(APP_SHOW_LOADING)

export const closeLoadingBar = createAction(APP_CLOSE_LOADING)

/**
 * 获取机台信息
 * */
export const getLineInfo = createAction(
    APP_LINE_INFO,
    (params) => api.get('/machineinfo/list', params)
)

// websocket 实时更新产线数据
export const updateLineInfo = createAction(
    APP_WEBSOCKET_LINE,
    params => params
)

export const getMachineInfo = createAction(
    APP_MACHINE_INFO,
    (params) => params
)

//  websocket实时更新机台数据
export const updateMachineInfo = createAction(
    APP_WEBSOCKET_MACHINE,
    params => params
)

export const updateCuttertypeInfo = createAction(
    APP_CUTTERTYPE_INFO,
    params => params
)

//  设置菜单
export const setSider = createAction(
    APP_SIDER,
    (params) => params
)
// 获取当前登录人信息
export const getPersonelInfo = createAction(
    GET_PERSONELINFO,
    (params) => api.get('/personalinfo/detail', params)
)
// 获取用户提醒信息
export const getRemindInfo = createAction(
    GET_REMIND_INFO,
    (params) => api.get('/accountinfo/remindusercheck', params)
)
//获取用户提醒个数信息
export const getRemindInfoList = createAction(
    GET_REMIND_INFO_LIST,
    (params,headers) => api.get('/accountinfo/remindusercheckcount', params,headers),
    () => {
        return { noMask: true }
    }
)
// 获取警告个数
export const allwarncount = createAction(
    ALL_WARN_COUNT,
    (params,headers) => api.get('/warninfo/allwarncount', params,headers),
    () => {
        return { noMask: true }
    }
)
// 获取警告信息
export const allwarn = createAction(
    ALL_WARN,
    (params) => api.get('/warninfo/allwarn', params)
)

/**
 * 获取刀具已加工数据
 */
export const getUselife = createAction(
    TOOL_MACHINE_USELIFE,
    (params) => api.get('/machineinfo/uselife', params)
)

export const updateCurrent = createAction(
    APP_UPDATE_CURRENT,
    params => params
)

export const updateToolrul = createAction(
    APP_UPDATE_TOOLRUL,
    params => params
)