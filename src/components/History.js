import React from 'react'
import { Row, Badge } from 'antd'
import TopNav from './TopNav'

const styles = {
	container: {
		backgroundColor: 'white',
		marginTop: '10px',
	},
	'container-item': {
		border: '1px solid #ddd',
		padding: '4%',
	},
}
export default function History(props) {
	return (
		<div style={{ backgroundColor: '#ddd', height: 'inherit' }}>
			<TopNav back='/home' title='My Orders' />
			<Row style={styles.container}>
				<Row style={styles['container-item']}>
					<strong style={{ color: 'black' }}>Perfect Nova Camera Stand</strong>
					<h3 style={{ color: '#666666' }}>
						<Badge status='success' />
						Returned
					</h3>
				</Row>
				<Row style={styles['container-item']}>
					<h5
						onClick={() => props.history.push('/review/1')}
						style={{ alignSelf: 'left' }}
					>
						Write a Review
					</h5>
				</Row>
			</Row>
			<Row style={styles.container}>
				<Row style={styles['container-item']}>
					<strong style={{ color: 'black' }}>Perfect Nova Camera Stand</strong>
					<h3 style={{ color: '#666666' }}>
						<Badge status='success' />
						Returned
					</h3>
				</Row>
				<Row style={styles['container-item']}>
					<h5 style={{ alignSelf: 'left' }}>Write a Review</h5>
				</Row>
			</Row>
		</div>
	)
}
