import React from 'react'
import { Row, Col, Alert, Icon, Button } from 'antd'
import TopNav from './TopNav'

const styles = {
	'product-img-container': {
		padding: '10%',
		width: '100%',
		border: '1px solid #ddd',
		position: 'relative',
		backgroundColor: 'white',
	},
	'product-img': {
		width: 'inherit',
		height: '30%',
	},
	'product-info': {
		padding: '2%',
		backgroundColor: 'white',
	},
	container: {
		backgroundColor: 'white',
		boxShadow: 'rgb(102, 102, 102) -1px -3px 11px',
	},
	'container-item': {
		border: '1px solid #ddd',
		padding: '4%',
	},
}

export default class ProductDetails extends React.Component {
	render() {
		return (
			<div style={{ backgroundColor: '#f2f2f2' }}>
				<TopNav back='/home' />
				{/* <h1>{this.props.match.params.id}</h1> */}
				<Row style={styles['product-img-container']}>
					<Icon
						style={{
							position: 'absolute',
							top: '5px',
							right: '5px',
							fontSize: '22px',
							color: 'red',
						}}
						type='heart'
						theme='filled'
					/>
					<img
						src='/cannon.jpeg'
						alt='product-img'
						style={styles['product-img']}
					/>
				</Row>
				<Row style={styles['product-info']}>
					<h1>Canon EOS 200D DSLR Camera</h1>
					<h3>$500</h3>
					<h3>Leased days : 5</h3>
					<Alert style={{ width: '30%' }} message='Free delivery' type='info' />
				</Row>
				<Button
					style={{ margin: '15px 0', border: '1px solid grey' }}
					// type='primary'
					icon='share-alt'
					block
				>
					Share
				</Button>
				<Row style={styles.container}>
					<Row style={styles['container-item']}>
						<strong style={{ color: 'black' }}>Delivery to :</strong>
						<span style={{ color: '#666666' }}>
							Mangesh,Road-5,chaudhary park,dighi,Pune-411015
						</span>
						<Button style={{ color: 'blue', marginLeft: '15px' }}>
							change
						</Button>
					</Row>
					<Row style={styles['container-item']}>
						<h5>Delivery in</h5>
						<h3>
							<strong>2 days, Wednesday</strong>
						</h3>
					</Row>
				</Row>
				<Row style={{ padding: '10%', ...styles.container }}>
					<h4>Highlight</h4>
					<ul>
						<li>Designed For: DSLR/SLR Camera, Mobile</li>
						<li>Load Capacity: 3000</li>
						<li>Height Range: 350.52 - 1049.02</li>
						<li>Material: Plastic</li>
						<li>Load Capacity: 3000</li>
						<li>Height Range: 350.52 - 1049.02</li>
						<li>Material: Plastic</li>
					</ul>
				</Row>
				<Button.Group
					style={{
						width: '100%',
						position: 'fixed',
						bottom: 0,
						boxShadow: 'rgb(102, 102, 102) -1px -3px 11px',
					}}
				>
					<Button style={{ width: '50%' }}>Add To Cart</Button>
					<Button
						style={{ width: '50%', backgroundColor: '#ff3300' }}
						type='primary'
					>
						Buy
					</Button>
				</Button.Group>
			</div>
		)
	}
}
