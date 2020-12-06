import { Menu, Dropdown, Icon, Tabs, Checkbox } from 'antd'
import './index.less'

const SubMenu = Menu.SubMenu
const TabPane = Tabs.TabPane
const selectorVal = { 0: 0, 1: 1, 2: 2, 'A': 3, 'B': 3, 'C': 3, 'D': 3 }
const showWord = { 0: '顯示全部機台', 1: '顯示差值降序前20', 2: '顯示差值降序前10', 'A': '顯示A線所有機台', 'B': '顯示B線所有機台', 'C': '顯示C線所有機台', 'D': '顯示D線所有機台' }
class Machinedown extends React.Component {
    constructor() { 
        super()
        this.state = {
            menuKey: '0',
            machines: {},
        }
    }

    turnTab = (key, event) => {
        event.preventDefault()
        event.stopPropagation()
    }
    groupClick = (event) => {
        //event.preventDefault()
        event.stopPropagation()
    }
    checkbox = (linenum, value) => { 
        this.setState({
            machines: {
                ...this.state.machines,
                [linenum]: value,
            }
        })
    }

    //  渲染checkbox
    renderCheckbox = (linenum, machinecodes) => { 
        return (
            <Checkbox.Group
                onChange={this.checkbox.bind(this, linenum)}
                onClick={this.groupClick}
                style={{ width: '100%' }}>
                {
                    machinecodes && machinecodes.map(item => { 
                        return <Checkbox value={item}>{item}</Checkbox>
                    })
                }
            </Checkbox.Group>
        )
    }

    menuSelect = ({ key }) => { 
        const { onChange } = this.props
        const { machines } = this.state
        this.setState({ menuKey: key })
        onChange && onChange({
            selector: key ? selectorVal[key] : 4,
            line: key,
            machines,
        })
    }
    onVisibleChange = (visible) => { 
        if (visible) return
        const { onChange } = this.props
        const { machines, menuKey } = this.state
        onChange && onChange({
            selector: menuKey ? selectorVal[menuKey] : 4,
            line: menuKey,
            machines,
        })
    }

    render() {
        const { className, machine } = this.props
        const { menuKey, machines } = this.state
        const menu = (
            <Menu
                onClick={this.menuSelect}
                getPopupContainer={() => this.el}>
                <Menu.Item key='0'>顯示全部機台</Menu.Item>
                <Menu.Item key='1'>顯示差值降序前20</Menu.Item>
                <Menu.Item key='2'>顯示差值降序前10</Menu.Item>
                <Menu.Item key='A'>顯示A線所有機台</Menu.Item>
                <Menu.Item key='B'>顯示B線所有機台</Menu.Item>
                <Menu.Item key='C'>顯示C線所有機台</Menu.Item>
                <Menu.Item key='D'>顯示D線所有機台</Menu.Item>
                <SubMenu key='4' title="顯示单機台">
                    <div id='downTabs' className='down-tab'>
                        <button className='down-btn'>確定</button>
                        <Tabs onTabClick={this.turnTab} type="card">
                            {
                                machine ? machine.map(item => {
                                    return <TabPane tab={item.linenum} key={item.linenum}>{this.renderCheckbox(item.linenum, item.machinecodes)}</TabPane>
                                }) : <div></div>
                            }
                        </Tabs>
                    </div>
                </SubMenu>
            </Menu>
        )
        let mac = []
        Object.keys(machines).forEach(key => { 
            mac = mac.concat(machines[key])
        })
        let machineString = mac.join(' ') || '請選擇'
        return (
            <div ref={(el) => { this.el = el }} className={`machine-down ${className}`}>
                <Dropdown
                    trigger='click'
                    overlay={menu}
                    onVisibleChange={this.onVisibleChange}
                    getPopupContainer={() => this.el}>
                    <div><span>{menuKey ? showWord[menuKey] : machineString}</span><Icon type="down" /></div>
                </Dropdown>
            </div>
        )
    }
}

export default Machinedown