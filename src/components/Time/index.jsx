import moment from 'moment'
import './index.less'

class Time extends React.PureComponent {
    constructor() { 
        super()
        this.state = {
            now: moment().format('YYYY-MM-DD HH:mm:ss')
        }
    }
    componentDidMount() { 
        this.timer = setInterval(() => { 
            this.setState({
                now: moment().format('YYYY-MM-DD HH:mm:ss')
            })
        }, 1000)
    }
    render() {
        const { className } = this.props
        return (
            <div className={`time-component ${className}`}>{this.state.now}</div>
        )
    }
}

export default Time