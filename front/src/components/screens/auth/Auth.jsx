import Layout from '../../layout/Layout'
import Loader from '../../ui/loader/Loader'
import Field from '../../ui/field/Field'
import Button from '../../ui/button/Button'
import styles from './Auth.module.scss'
import { useAuthPage } from './useAuthPage'

const Auth = () => {
	//
	const { errors, handleSubmit, isLoading, onSubmit, register, setType } =
		useAuthPage()
	return (
		<Layout heading="Sign in" bgImage="/images/auth-bg.jpg">
			<div className="wrapper-inner-page">
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						name="email"
						error={errors?.email?.message}
						register={register}
						options={{
							required: 'Email is required'
						}}
						type="text"
						placeholder="Enter Email"
					/>
					<Field
						name="password"
						error={errors?.password?.message}
						register={register}
						options={{
							required: 'Password is required'
						}}
						type="password"
						placeholder="Enter password"
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sign in</Button>
						<Button clickHandler={() => setType('register')}>Sign up</Button>
					</div>
				</form>
			</div>
		</Layout>
	)
}

export default Auth
