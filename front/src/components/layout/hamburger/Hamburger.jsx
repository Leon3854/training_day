import Menu from './Menu'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import styles from './Hamburger.module.scss'
import { useOnClickOutside } from '../../../hooks/useClickOutside'

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)} aria-label="Open menu">
				{isShow ? (
					<RxCross2 color="white" fontSize={18} />
				) : (
					<GiHamburgerMenu color="white" fontSize={18} />
				)}
			</button>
			<Menu isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}

export default Hamburger
