import { connect } from 'react-redux'
import Header from './header'
import Loading from 'src/components/Loading'
import * as actions from 'actions/App/app'
import reducers from 'reducers/App/app'
import { injectReducer } from 'src/utils/injectReducer'
injectReducer('app', reducers)
import './app.less'

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="app">
				{this.props.loading ? <Loading /> : undefined}
				<div className='app-layout'>
					<Header {...this.props}/>
					<div className='app-content'>
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}

export default connect(
	({ app }) => {
		return {
			loading: app.loading,
		}
	}, {
		...actions,
	}
)(App)