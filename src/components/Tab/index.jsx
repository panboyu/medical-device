import { Radio } from 'antd'
import './index.less'
import arrowDown from 'src/images/arrow02.png'
import arrowUp from 'src/images/arrow022.png'

class Tab extends React.Component {
    constructor(props) { 
        super(props)
        this.state = {
            isSelect: false,
            selectVal: props.cuttertype || '',
        }
    }
    componentWillReceiveProps(nextProps) { 
        if (this.props.cuttertype !== nextProps.cuttertype) { 
            this.setState({
                selectVal: nextProps.cuttertype,
            })
        }
    }

    scroll = (scroll) => { 
        document.getElementById('tabGroup').scrollTop = document.getElementById('tabGroup').scrollTop + scroll
    }

    downSelect = () => { 
        this.setState({
            isSelect: false,
        })
    }

    //  大于10tab时 切换
    radioBigTab = (e) => { 
        const { onChange } = this.props
        onChange && onChange(e.target.value)
        this.setState({
            isSelect: true,
            selectVal: e.target.value,
        })
    }

    //  少于10tab时 切换
    radioTab = (e) => { 
        const { onChange } = this.props
        onChange && onChange(e.target.value)
        this.setState({
            selectVal: e.target.value,
        })
    }

    renderScorllTab = (tabData) => { 
        const { selectVal, isSelect } = this.state
        return (
            isSelect ? <div className='tab-select'>
                <div className='select-content'>{selectVal}</div>
                <div onClick={this.downSelect} className="select-arrow">
                    <img src={arrowDown} />
                </div>
            </div> : <div className='tab-group-container'>
                    <div onClick={this.scroll.bind(this, -240)} className='tab-arrow arrow-up'>
                        <img src={arrowUp} />
                    </div>
                    <div className='tab-group-outside' id='tabGroup'>
                        <Radio.Group
                            value={selectVal}
                            className='tab-group'
                            onChange={this.radioBigTab}
                            buttonStyle='solid'>
                            {
                                tabData.map((item, index) => { 
                                    return <Radio.Button value={item}>{item}</Radio.Button>
                                })
                            }
                        </Radio.Group>
                    </div>
                    <div onClick={this.scroll.bind(this, 240)} className='tab-arrow arrow-down'>
                        <img src={arrowDown} />
                    </div>
                </div>
        )
    }

    renderTab = (tabData) => { 
        const { selectVal } = this.state
        return (
            <Radio.Group
                value={selectVal}
                className='tab-group'
                onChange={this.radioTab}
                buttonStyle='solid'>
                {
                    tabData.map((item, index) => { 
                        return <Radio.Button value={item}>{item}</Radio.Button>
                    })
                }
            </Radio.Group>
        )
    }

    render() {
        const { tabData } = this.props
        if (!tabData) return null
        return (
            <div className='tab-page'>
                {
                    tabData.length > 10 ? this.renderScorllTab(tabData) : this.renderTab(tabData)
                }
            </div>
        )
    }
}

export default Tab