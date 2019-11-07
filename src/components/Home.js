import React from 'react'
import { Input, Row, Col } from 'antd'
import 'antd/dist/antd.css'
import { Items } from '../Database'
import ProductList from '../components/ProductList'
import NavBar from '../components/NavBar'
import SettingsCard from '../components/SettingsCard'
const { Search } = Input
const styles = {
	categories: {
		display: 'flex',
		overflowX: 'scroll',
	},
	categoriesImg: {
		flexBias: '30%',
		height: '50px',
		margin: '5%',
		borderRadius: '5px',
	},
}

export default function Home({ match }) {
	return (
		<Row style={{ height: '100%' }}>
			<NavBar />
			<Col span={21} offset={3}>
				<SettingsCard />
				<Search
					placeholder='input search text'
					onSearch={value => console.log(value)}
					enterButton
					style={{ marginTop: '7vh' }}
				/>
				<div style={styles.categories}>
					<img
						alt='electronic'
						style={styles.categoriesImg}
						src='/electronics.jpg'
					/>
				</div>
				<ProductList match={match} items={Items} />
			</Col>
		</Row>
	)
}
