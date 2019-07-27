import React from 'react'
import LoginPage from './components/Login'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import Profile from './components/Profile'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetail'
import ProtectedRoute from './components/ProtectedRoute'
class App extends React.Component {
	render() {
		return (
			<Router>
				<Route exact path='/home' component={Home} />
				<Route path='/register' component={() => <RegisterForm />} />
				<Route path={`/home/:id`} component={ProductDetails} />
				{/* <ProtectedRoute path='/' exact={true} component={Home} />*/}
				<Route path='/login' component={() => <LoginPage />} />
				<Route path='/profile' component={() => <Profile />} />
			</Router>
		)
	}
}

export default App
