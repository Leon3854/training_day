/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import cn from 'clsx'
import { menu } from './menu.data.js'
import { useAuth } from '../../../hooks/useAuth.js'
import { TOKEN } from '../../../app.constants.js'

import styles from './Hamburger.module.scss'

const Menu = ({ isShow, setIsShow }) => {
	const { setIsAuth } = useAuth()

	const logoutHandle = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
		setIsShow(false)
	}

	return (
		<nav className={cn(styles.menu, { [styles.show]: isShow })}>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						{/* {item.title} */}
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={logoutHandle}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
