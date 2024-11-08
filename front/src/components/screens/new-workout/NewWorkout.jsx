import { Link } from 'react-router-dom'

import Loader from '../../ui/loader/Loader'
import Alert from '../../ui/alert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Layout from '../../layout/Layout'

import { useNewWorkout } from './useNewWorkout'
import SelectExercises from './SelectExercises'

const NewWorkout = () => {
	//
	const {
		control,
		error,
		errors,
		handleSubmit,
		isLoading,
		isSuccess,
		onSubmit,
		register
	} = useNewWorkout()

	return (
		<>
			<Layout bgImage="/images/titan.jpg" heading="Create new workout">
				<div className="wrapper-inner-page">
					{error && <Alert type="error" text={error} />}
					{isSuccess && <Alert text="Workout created successfully" />}
					{isLoading && <Loader />}
					<form onSubmit={handleSubmit(onSubmit)}>
						<Field
							error={errors?.name?.message}
							name="name"
							register={register}
							options={{
								required: 'Name is required'
							}}
							type="text"
							placeholder="Enter name"
						/>
						<Link to="/new-exercise" className="dark-link">
							Add new Exercise
						</Link>
						<SelectExercises control={control} />
						{errors?.iconPath && (
							<div className="error">{errors?.iconPath?.message}</div>
						)}
						<Button>Create</Button>
					</form>
				</div>
			</Layout>
		</>
	)
}

export default NewWorkout
