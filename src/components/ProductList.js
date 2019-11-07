import React from 'react'
import Product from '../components/Product'
import { Link } from 'react-router-dom'
import { Items as items } from '../Database'
export default class ProductList extends React.Component {
	render() {
		// return <div style={{ display: 'flex', flexWrap: 'wrap',marginLeft:'13%' }}>{this.items}</div>
		console.log(this.props.match)
		return (
			<React.Fragment>
				<div style={{ display: 'flex', flexWrap: 'wrap' }}>
					{items.map((item, index) => (
						<Link key={index} to={`${this.props.match.url}/${item.id}`}>
							<Product
								id={item.id}
								name={item.name}
								description={item.description}
								leasedDays={item.leasedDays}
								price={item.pricePerUnit}
								imgUrl={item.imgUrl}
							/>
						</Link>
					))}
				</div>
			</React.Fragment>
		)
	}
}
