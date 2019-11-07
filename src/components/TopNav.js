import React from 'react'
import { Row, Icon, Col } from 'antd'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
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
		justifyContent: 'space-between',
	},
}
export default function TopNav(props) {
	return (
		<Row type='flex' style={styles.nav}>
			<Col>
				{props.back ? (
					<Link
						style={styles.font}
						to={
							typeof props.back === 'string' ? props.back : () => props.back()
						}
					>
						<Icon type='arrow-left' />
					</Link>
				) : null}
			</Col>
			<span style={{ ...styles.font }}>{props.title}</span>
			<Col style={{ display: 'flex', justifyContent: 'space-between' }}>
				{props.menuItems &&
					props.menuItems.map(item => (
						<span
							onClick={() => item.to()}
							style={{ margin: '5px', ...styles.font }}
						>
							{item.text}
						</span>
					))}
			</Col>
		</Row>
	)
}

TopNav.propTypes = {
	menuItems: PropTypes.array,
	title: PropTypes.string.isRequired,
	back: PropTypes.string,
}
