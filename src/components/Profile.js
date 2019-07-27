import React from 'react'
import { Icon, Row, Avatar, Col } from 'antd'
import TopNav from './TopNav'

const styles = {
	profile: {
		boxSizing: 'border-box',
		padding: '1%',
	},
	'profile-header': {
		padding: '2%',
		display: 'flex',
		alignItems: 'center',
		borderBottom: '1px solid #ddd',
	},
	'profile-info': {
		padding: '4%',
	},
	'profile-body': {
		padding: '2%',
	},
	'profile-body-item': {
		borderBottom: '1px dashed #666666',
		padding: '2%',
		display: 'flex',
	},
}
export default function profile(props) {
	return (
		<React.Fragment>
			<TopNav
				title='Profile'
				back='/home'
				menuItems={[{ to: '/logout', text: 'Logout' }]}
			/>
			<Row style={styles['profile']}>
				<Row style={styles['profile-header']}>
					<Col xs={6}>
						<Avatar
							style={{ backgroundColor: 'green', width: '100%' }}
							size={100}
							icon='user'
						/>
					</Col>
					<Col xs={18} style={styles['profile-info']}>
						<h1>9423575116</h1>
						<h3>Mangesh Kumar</h3>
						<h5 style={{ color: '#666666' }}>kumarmangesh55@gmail.com</h5>
					</Col>
				</Row>
				<Row style={styles['profile-body']}>
					<Row style={styles['profile-body-item']}>
						<svg
							t='1563697307845'
							class='icon'
							viewBox='0 0 1024 1024'
							version='1.1'
							xmlns='http://www.w3.org/2000/svg'
							p-id='1980'
							width='30px'
							height='30px'
						>
							<path
								d='M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z'
								p-id='1981'
							/>
						</svg>
						<h3 style={{ paddingLeft: '5%' }}>
							Mangesh,Road-5,chaudhary park,dighi,Pune-411015
						</h3>
					</Row>
					<Row style={styles['profile-body-item']}>
						<Icon style={{ fontSize: 30, color: 'black' }} type='lock' />
						<h3 style={{ paddingLeft: '5%' }}>change password</h3>
					</Row>
				</Row>
			</Row>
		</React.Fragment>
	)
}
