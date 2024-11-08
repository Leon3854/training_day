import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import styles from './Home.module.scss'

//
const Home = () => {
	const navigate = useNavigate()

	return (
		<Layout bgImage="/images/home-bg.jpg">
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			<h1 className={styles.heading}>EXERCISES FROM THE SHOULDERS</h1>
		</Layout>
	)
}

export default Home
