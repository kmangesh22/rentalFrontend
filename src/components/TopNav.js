import React from 'react'
import { Row, Icon, Col } from 'antd'
import { Link } from 'react-router-dom'

const styles = {
	font: {
		color: 'white',
		fontSize: '1.3em',
	},
	nav: {
		height: '8vh',
		backgroundColor: 'black',
		alignItems: 'center',
		padding: '3%',
	},
}
export default function TopNav(props) {
	return (
		<Row type='flex' style={styles.nav}>
			<Col style={{ display: 'flex', justifyContent: 'space-between' }} xs={12}>
				<Link style={styles.font} to={props.back}>
					<Icon type='arrow-left' />
				</Link>
				<span style={{ ...styles.font }}>{props.title}</span>
			</Col>
			<Col style={{ display: 'flex', justifyContent: 'flex-end' }} xs={12}>
				{props.menuItems &&
					props.menuItems.map(item => (
						<Link style={styles.font} to={item.to}>
							<span style={{ margin: '5px' }}>{item.text}</span>
						</Link>
					))}
			</Col>
		</Row>
	)
}
