/* eslint-disable react/prop-types */
import cn from 'clsx'
import { useNavigate } from 'react-router-dom'

import styles from './Workout.module.scss'

//
const ExerciseItem = ({ exerciseLog }) => {
	const navigation = useNavigate()

	return (
		<div
			className={cn(styles.item, {
				[styles.completed]: exerciseLog.isCompleted
			})}
		>
			<button
				className={styles.exerciseButton}
				aria-label="Move to exercise"
				onClick={() => navigation(`/exercise/${exerciseLog.id}`)}
			>
				<span>{exerciseLog.exercise.name}</span>
				<img
					src={import.meta.env.VITE_SERVER_URL + exerciseLog.exercise.iconPath}
					height="34"
					alt=""
					draggable={false}
					color="#fff"
				/>
			</button>
		</div>
	)
}

export default ExerciseItem
