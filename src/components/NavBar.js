import React from 'react'
import { Icon } from 'antd'
import 'antd/dist/antd.css'
import styles from '../styles/NavBar.module.css'

const NavBar = props => {
	console.log(props.isOpen)
	return (
		<div className={styles.nav}>
			<Icon
				onClick={() => props.toggle()}
				className={styles['nav-toggler'] && styles['icon']}
				type={props.isOpen ? 'close' : 'menu'}
			/>
			<div className={styles['nav-menu']}>
				<div className={styles['nav-item']}>
					<Icon type='home' className={styles['icon']} />
					<span className={styles['myspan']}>HOME</span>
				</div>
				<div className={styles['nav-item']}>
					<Icon type='login' className={styles['icon']} />
					<span className={styles['myspan']}>LOGIN</span>
				</div>
				<div className={styles['nav-item']}>
					<Icon type='user-add' className={styles['icon']} />
					<span className={styles['myspan']}>SIGN UP</span>
				</div>
			</div>
		</div>
	)
}

export default NavBar
