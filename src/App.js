import React from 'react'
import LoginPage from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import ProductDetails from './components/ProductDetail'
import ProtectedRoute from './components/ProtectedRoute'
import Register from './components/Register'
import History from './components/History'
import Review from './components/Review'

class App extends React.Component {
	render() {
		return (
			<Router>
				<Route path='/' exact={true} render={() => <Redirect to='/home' />} />
				<ProtectedRoute path='/home' exact={true} component={Home} />
				<ProtectedRoute path='/home/:id' component={ProductDetails} />
				<Route path='/login' component={LoginPage} />
				<Route path='/register' component={Register} />
				<ProtectedRoute path='/profile' component={Profile} />
				<ProtectedRoute path='/history' component={History} />
				<ProtectedRoute path='/review/:id' component={Review} />
			</Router>
		)
	}
}

export default App
