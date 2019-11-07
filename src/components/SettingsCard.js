import React from 'react'
import { Card, Badge, Avatar, Icon, Tooltip, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'
import { connect } from 'react-redux'
function SettingsCardBody(props) {
	return (
		<React.Fragment>
			<Card
				style={{ marginTop: '1%', display: props.display }}
				actions={[
					<Tooltip title='Profile'>
						<Link to='/profile'>
							<Icon type='info-circle' />
						</Link>
					</Tooltip>,
					<Tooltip title='logout'>
						<Icon onClick={() => props.logout()} type='logout' />
					</Tooltip>,
					<Tooltip title='history'>
						<Link to='/history'>
							<Icon type='history' />
						</Link>
					</Tooltip>,
				]}
			>
				<Card.Meta
					avatar={<Avatar style={{ backgroundColor: '#87d068' }} icon='user' />}
					title={props.name}
					description={<Badge status='success' text='online' />}
				/>
			</Card>
		</React.Fragment>
	)
}
const mapDispatchToProps = {
	logout: logout,
}
//eslint-disable-next-line
SettingsCardBody = connect(
	null,
	mapDispatchToProps
)(SettingsCardBody)
export default function SettingsCard() {
	const [display, setDisplay] = React.useState('none')

	const handleUserProfToggle = () => {
		if (display === 'none') setDisplay('block')
		else setDisplay('none')
	}

	return (
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
				<SettingsCardBody display={display} name='Mangesh Kumar' />
			</Row>
		</Col>
	)
}
