import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import workoutLogService from '../../../../services/workout/workout-log.service'
import workoutService from '../../../../services/workout/workout.service'
//
export const useWorkouts = () => {
	//
	const { data, isSuccess } = useQuery(
		['get workouts'],
		() => workoutService.getAll(),
		{
			select: ({ data }) => data
		}
	)
	//
	const navigate = useNavigate()
	//
	const {
		mutate,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation(
		['Create new workout log'],
		(workoutId) => workoutLogService.create(workoutId),
		{
			onSuccess({ data }) {
				navigate(`/workout/${data.id}`)
			}
		}
	)

	return {
		data,
		isSuccess,
		mutate,
		isLoading,
		isSuccessMutate,
		error
	}
}
