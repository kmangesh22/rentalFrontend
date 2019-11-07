import React from 'react'
import { Icon, Col } from 'antd'
import { Link } from 'react-router-dom'
import styles from '../styles/NavBar.module.css'

export default function NavBar() {
	const [isOpen, toggle] = React.useState(false)
	const [responsive, setResponsive] = React.useState({
		md: 1,
		xs: 3,
	})

	const handleNavToggle = () => {
		console.log('clicked')
		if (isOpen && window.innerWidth >= 768) {
			setResponsive({ md: 1 })
			toggle(false)
		} else if (!isOpen && window.innerWidth >= 768) {
			setResponsive({ md: 6 })
			toggle(true)
		} else if (isOpen && window.innerWidth <= 576) {
			setResponsive({ xs: 3 })
			toggle(false)
		} else if (!isOpen && window.innerWidth <= 576) {
			setResponsive({ xs: 10 })
			toggle(true)
		}
	}

	return (
		<Col
			md={responsive.md}
			xs={responsive.xs}
			style={{ height: '100%', position: 'fixed', zIndex: 1000 }}
		>
			<div className={styles.nav}>
				<Icon
					onClick={() => handleNavToggle()}
					className={styles['nav-toggler'] && styles['icon']}
					type={isOpen ? 'close' : 'menu'}
				/>
				<div className={styles['nav-menu']}>
					<div className={styles['nav-item']}>
						<Link to='/login'>
							{' '}
							<Icon type='login' className={styles['icon']} />
							<span className={styles['myspan']}>LOGIN</span>
						</Link>
					</div>
					<div className={styles['nav-item']}>
						<Link to='/register'>
							<Icon type='user-add' className={styles['icon']} />
							<span className={styles['myspan']}>SIGN UP</span>
						</Link>
					</div>
				</div>
			</div>
		</Col>
	)
}
