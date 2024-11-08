/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from 'react-router-dom'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'
import { GoArrowLeft } from 'react-icons/go'
import { FaUserInjured } from 'react-icons/fa'
import { useAuth } from '../../../hooks/useAuth'

const Header = ({ backLink = '' }) => {
	//
	const { pathname } = useLocation()
	const navigate = useNavigate()
	//
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{pathname !== '/' || !isAuth ? (
				<button
					aria-label="Go to profile"
					onClick={() => {
						navigate('/profile')
					}}
				>
					<GoArrowLeft fontSize={18} />
				</button>
			) : (
				<button
					aria-label="Go back"
					onClick={() => {
						navigate(isAuth ? backLink : '/auth')
					}}
				>
					<FaUserInjured fontSize={18} />
				</button>
			)}
			{isAuth && <Hamburger />}
		</header>
	)
}

export default Header
