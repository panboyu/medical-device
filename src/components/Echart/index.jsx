import * as echarts from 'echarts'

class Echart extends React.Component {
    constructor() { 
        super()
    }

    componentDidMount() { 
        const { opts, callback } = this.props
        this.chart = echarts.init(this.el, null, opts)
        this.setOption(this.props.option)
        callback && callback(this.chart)
        window.addEventListener('resize', this.resize)
    }

    componentDidUpdate() { 
        this.setOption(this.props.option)
    }

    componentWillUnmount() { 
        this.chart && this.chart.dispose()
        window.removeEventListener('resize', this.resize)
    }

    setOption = (option) => { 
        if (!this.chart || !option) return
        this.chart.setOption(option)
        this.resize()
    }

    resize = () => { 
        this.chart && this.chart.resize()
    }

    render() {
        const { className } = this.props
        return (
            <div
                className={className}
                ref={(el) => { this.el = el }}
                style={{ width: '100%', height: '100%' }}>
            </div>
        )
    }
}

export default Echart