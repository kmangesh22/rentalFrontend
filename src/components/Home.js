import React from 'react'
import { Input, Row, Col, Avatar } from 'antd'
import 'antd/dist/antd.css'
import { Items } from '../Database'
import ProductList from '../components/ProductList'
import NavBar from '../components/NavBar'
import UserProfile from '../components/OptionsCard'
const { Search } = Input

export default function Home({ match }) {
	const [isOpen, toggle] = React.useState(false)
	const [responsive, setResponsive] = React.useState({
		md: 1,
		xs: 3,
	})

	const handleNavToggle = () => {
		console.log('clicked')
		if (isOpen && window.innerWidth >= 768) {
			setResponsive({ md: 1 })
			toggle(false)
		} else if (!isOpen && window.innerWidth >= 768) {
			setResponsive({ md: 6 })
			toggle(true)
		} else if (isOpen && window.innerWidth <= 576) {
			setResponsive({ xs: 3 })
			toggle(false)
		} else if (!isOpen && window.innerWidth <= 576) {
			setResponsive({ xs: 10 })
			toggle(true)
		}
	}

	const [display, setDisplay] = React.useState('none')

	const handleUserProfToggle = () => {
		if (display === 'none') setDisplay('block')
		else setDisplay('none')
	}

	return (
		<Row style={{ height: '100%' }}>
			<Col
				md={responsive.md}
				xs={responsive.xs}
				style={{ height: '100%', position: 'fixed', zIndex: 1000 }}
			>
				<NavBar
					isOpen={isOpen}
					toggle={handleNavToggle}
					navItems={['Home', 'Login', 'Sign Up']}
				/>
			</Col>
			<Col span={21} offset={3}>
				<Row
					style={{
						padding: '2%',
						flexDirection: 'column',
						alignItems: 'flex-end',
						position: 'fixed',
						right: 0,
						zIndex: 1000,
					}}
					type='flex'
					justify='space-around'
				>
					<Avatar
						onClick={() => {
							console.log('clicked avatar')
							handleUserProfToggle()
						}}
						style={{ backgroundColor: '#87d068' }}
						icon='user'
					/>
					<UserProfile display={display} name='Mangesh Kumar' />
				</Row>
				<Search
					placeholder='input search text'
					onSearch={value => console.log(value)}
					enterButton
					style={{ marginTop: '7vh' }}
				/>
				<ProductList match={match} items={Items} />
			</Col>
		</Row>
	)
}
