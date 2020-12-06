import { Spin, Icon } from 'antd';
const antIcon = <Icon type="loading" style={{ fontSize: '36px' }} spin />

import './index.less'

export default () => (
    <button className='loading-container'>
        <Spin indicator={antIcon} />
    </button>
)