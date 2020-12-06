import { Select } from 'antd'
import './index.less'

const { Option } = Select
class SelectMachine extends React.PureComponent {
    constructor(props) { 
        super(props)
    }

    machineChange = (machinecode) => { 
        const { onChange } = this.props
        onChange && onChange(machinecode)
    }

    render() {
        const { data, value, className, dom } = this.props
        return (
            <Select
                data={data}
                value={value}
                onChange={this.machineChange}
                getPopupContainer={() => dom}
                className={className} >
                {
                    data && data.map(item => { 
                        return <Option value={item.machinecode}>機台編號 {item.machinecode}</Option>
                    })
                }
            </Select>
        )
    }
}

export default SelectMachine