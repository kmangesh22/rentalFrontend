import React from 'react'
import { Card, Badge, Avatar, Icon, Tooltip } from 'antd'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import LoginPage from './Login'
export default React.forwardRef(function UserProfile(props, ref) {
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
						<Icon type='logout' />
					</Tooltip>,
					<Tooltip title='history'>
						<Icon type='history' />
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
})
