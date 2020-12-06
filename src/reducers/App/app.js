import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import {
    APP_SIDER,
    APP_SHOW_LOADING,
    APP_CLOSE_LOADING,
    APP_LINE_INFO,
    APP_WEBSOCKET_LINE,
    APP_MACHINE_INFO,
    APP_WEBSOCKET_MACHINE,
    APP_CUTTERTYPE_INFO,
    GET_PERSONELINFO,
    APP_UPDATE_CURRENT,
    APP_UPDATE_TOOLRUL,
} from 'actions/App/app'

const loading = handleActions({
    [APP_SHOW_LOADING]: () => true,
    [APP_CLOSE_LOADING]: () => false,
}, false)

const sider = handleActions({
    [APP_SIDER]: (state, { payload }) => payload
}, 'ws/global')

const machineInfo = handleActions({
    [APP_MACHINE_INFO]: (state, { payload }) => payload,
    [APP_WEBSOCKET_MACHINE]: (state, { payload }) => { 
        if (state) {
            if (payload && payload.machinecode && state[payload.machinecode]) {
                let cutter = state[payload.machinecode][payload.currenttype] || {}
                return {
                    ...state, [payload.machinecode]: {
                        ...state[payload.machinecode],
                        machinestatus: payload.machinestatus?Number(payload.machinestatus):payload.machinestatus,
                        cycletime: payload.cycletime,
                        operatingTime: payload.operatingTime,
                        poweronTime: payload.poweronTime,
                        netstatus:payload.netstatus,
                        [payload.currenttype]: {
                            ...cutter,
                            ...payload,
                        },
                    }
                }
            } else { 
                return state
            }
        } else { 
            return null
        }
    },
    [APP_CUTTERTYPE_INFO]: (state, { payload }) => { 
        if (state) {
            if (payload && payload.machinecode && state[payload.machinecode]) {
                let cutter = state[payload.machinecode][payload.cuttertype] || {}
                return {
                    ...state, [payload.machinecode]: {
                        ...state[payload.machinecode],
                        [payload.cuttertype]: {
                            ...cutter,
                            ...payload,
                        }
                    }
                }
            } else { 
                return state
            }
        } else { 
            return null
        }
    },
    [APP_UPDATE_CURRENT]: (state, { payload }) => { 
        if (state) {
            if (payload && state[payload.machinecode]) {
                let cutter = state[payload.machinecode][payload.cuttertype]
                return {
                    ...state, [payload.machinecode]: {
                        ...state[payload.machinecode],
                        [payload.cuttertype]: {
                            ...cutter,
                            workcount: payload.uselife,
                        }
                    }
                }
            } else { 
                return state
            }
        } else { 
            return state
        }
    },
    [APP_UPDATE_TOOLRUL]: (state, { payload }) => { 
        if (state) {
            if (payload && state[payload.machinecode]) {
                let cutter = state[payload.machinecode][payload.cuttertype]
                return {
                    ...state, [payload.machinecode]: {
                        ...state[payload.machinecode],
                        [payload.cuttertype]: {
                            ...cutter,
                            tool_rul: payload.tool_rul,
                        }
                    }
                }
            } else { 
                return state
            }
        } else { 
            return state
        }
    }
}, null)

const lineInfo = handleActions({
    [APP_LINE_INFO]: (state, { payload }) => { 
        if (payload && payload.length) {
            let Obj = {}
            payload.forEach(item => { 
                Obj[item.linenum] = {}
                if (item.machinecodes && item.machinecodes.length) { 
                    item.machinecodes.forEach(e => { 
                        Obj[item.linenum][e] = { machinestatus: 3 }
                    })
                }
            })
            return Object.assign({}, state, Obj)
        } else { 
            return null
        }
    },
    [APP_WEBSOCKET_LINE]: (state, { payload }) => { 
        if (state) {
            if (payload && payload.machinecode) {
                let line = ''
                Object.keys(state).forEach(item => { 
                    Object.keys(state[item]).forEach(key => { 
                        if (key == payload.machinecode) { 
                            line = item
                        }
                    })
                })
                if (line) {
                    return {
                        ...state, [line]: {
                            ...state[line], [payload.machinecode]: {
                                ...state[line][payload.machinecode],
                                ...payload,
                    } } }
                } else { 
                    return state
                }
            } else { 
                return state
            }
        } else { 
            return null
        }
    }
}, null)
const personalInfo = handleActions({
    [GET_PERSONELINFO]: (state, { payload }) => payload&&payload[0],
}, null)
export default combineReducers({
    loading,
    sider,
    lineInfo,
    machineInfo,
    personalInfo
})