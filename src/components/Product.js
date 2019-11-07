import React from 'react'
import { Row, Col, Tag, Icon } from 'antd'
import 'antd/dist/antd.css'

import '../styles/Product.css'

/*OLD STYLE */

// const Product = ({ id, name, description, leasedDays, price, imgUrl }) => (
// 	<div key={id} className='product'>
// 		<div className='product-header'>
// 			<img src={imgUrl} className='product-img' alt={imgUrl} />
// 			<span className='product-name'>{name}</span>
// 		</div>
// 		<div className='product-body'>
// 			<ul className='product-description'>
// 				{description.map(desc => (
// 					<li>{desc}</li>
// 				))}
// 			</ul>
// 		</div>
// 		<div className='product-footer'>
// 			<Divider>Leased-Days : {leasedDays}</Divider>
// 			<Divider style={{ clear: 'both' }}>Cost : ${price}</Divider>
// 			<Button shape='round' size='large' block type='primary'>
// 				Buy
// 			</Button>
// 		</div>
// 	</div>
// )
const Product = ({ id, name, description, leasedDays, price, imgUrl }) => (
	<Row key={id} className='product'>
		<Row className='product-body'>
			<Col xs={3} className='product-img-container'>
				<img src={imgUrl} className='product-img' alt={imgUrl} />
			</Col>
			<Col xs={14} className='product-info'>
				<Row type='flex' justify='end'>
					<Icon
						style={{ fontSize: '22px', color: 'red' }}
						type='heart'
						theme='filled'
					/>{' '}
				</Row>
				<h5>{name}</h5>
				<h2>${price}</h2>
				<h4>Leased-Days : {leasedDays}</h4>
			</Col>
		</Row>
		<Row className='product-description'>
			{description.map((desc, index) => (
				<Tag key={index}>{desc}</Tag>
			))}
		</Row>
	</Row>
)
export default Product
