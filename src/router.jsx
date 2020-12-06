import Async from 'react-code-splitting'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

import App from 'pages/App/app'
import 'src/utils/iconfont/iconfont.css'

import Main from 'pages/Main/index'

class Routes extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { props } = this
		return (
			<Switch>
				<App {...props}>
					<Switch>
						<Route path='/main' component={Main} />
						<Redirect to={{ pathname: '/main', search: props.location.search }} />
					</Switch>
				</App>
			</Switch>
		)
    }
}
export default withRouter(Routes)