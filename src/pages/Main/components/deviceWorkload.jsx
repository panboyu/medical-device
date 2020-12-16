import React, { Component } from 'react'
import './deviceWorkload.less'

class DeviceWorkload extends Component {
    renderItem = item => { 
        return <div className="device-td">
            <span className='th1'>{item.name}</span>
            <span className='th2'>{item.sn}</span>
            <span className='th3'>{item.brand}</span>
            <span className='th4'>{item.year_inspection_times}</span>
        </div>
    }
    render() {
        const { data = [] } = this.props
        return (
            <div className='device-workload-page'>
                <div className="device-title">本年设备工作量排行(前10)</div>
                <div className='device-table'>
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
                        data.map(item => { 
                            return this.renderItem(item)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default DeviceWorkload