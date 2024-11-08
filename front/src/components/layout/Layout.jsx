/* eslint-disable react/prop-types */
import cn from 'clsx'
import Header from './header/Header'
import styles from './Layout.module.scss'
import { useCheckToken } from '../../hooks/useCheckToken'

const Layout = ({ children, bgImage, heading = '', backLink = '/' }) => {
	// debugger

	useCheckToken()

	return (
		<section
			className={cn(styles.wrapper, { [styles.otherPath]: !!heading })}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header backLink={backLink} />
			{heading && <h1 className={styles.heading}>{heading}</h1>}
			{children && <div>{children}</div>}
		</section>
	)
}

export default Layout
