import cn from 'clsx'
import { useMutation } from '@tanstack/react-query'
import { useForm, Controller } from 'react-hook-form'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Alert from '../../ui/alert/Alert'
import styles from './NewExercise.module.scss'
import Loader from '../../ui/loader/Loader'
import { getIconPath } from './image-path.utils'
import ExerciseService from '../../../services/exercise/exercise.service'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewExercise = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { isSuccess, error, isLoading, mutate } = useMutation(
		['create exercise'],
		body => ExerciseService.create(body),
		{
			onSuccess: () => {
				reset()
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
	}

	return (
		<>
			<Layout
				bgImage="/images/new-exercise-bg.jpg"
				heading="Create new exercise"
				backLink="/new-workout"
			/>
			<div className="wrapper-inner-page">
				{error && <Alert type="error" text={error} />}
				{isSuccess && <Alert text="Exercise created" />}
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

					<Field
						error={errors?.quantity?.message}
						name="quantity"
						register={register}
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || 'Quantity must be number',
							required: 'Quantity is required'
						}}
						placeholder="Enter quantity"
					/>

					<Controller
						name="iconPath"
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map(name => (
									<img
										key={`ex img ${name}`}
										src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(
											name
										)}`}
										alt={name}
										className={cn({
											[styles.active]: value === getIconPath(name)
										})}
										onClick={() => onChange(getIconPath(name))}
										draggable={false}
										height="45"
									/>
								))}
							</div>
						)}
					/>

					{errors?.iconPath && (
						<div className="error">{errors?.iconPath?.message}</div>
					)}

					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewExercise
