import React, { Component } from 'react'
import './deviceWorkload.less'

class DeviceWorkload extends Component {
    renderItem = () => { 
        return <div className="device-td">
            <span className='th1'>MRI(1号机)</span>
            <span className='th2'>10.03.011.1209001</span>
            <span className='th3'>西门子</span>
            <span className='th4'>71245</span>
        </div>
    }
    render() {
        return (
            <div className='device-workload-page'>
                <div className="device-title">本年设备工作量排行(前10)</div>
                <div className='device-th'>
                    <span className='th1'>设备名称</span>
                    <span className='th2'>资产编号</span>
                    <span className='th3'>品牌型号</span>
                    <span className='th4 th-lasth'>
                        <span className='th5'>当年检查</span>
                        <span className='th6'>人次(万次)</span>
                    </span>
                </div>
                {
                    
                }
            </div>
        )
    }
}

export default DeviceWorkload