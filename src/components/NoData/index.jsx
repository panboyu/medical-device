import './noData.less'
import noData from 'images/table_nodata.png'
class Time extends React.Component {
    render() {
        return (
            <div className="noData">
                <img className='img' src={this.props.img ? this.props.img : noData} alt="" />
                <p className='description'>{this.props.description ? this.props.description : '暫無用戶'}</p>
            </div>
        )
    }
}

export default Time