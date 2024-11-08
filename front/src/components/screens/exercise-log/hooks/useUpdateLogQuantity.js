import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import ExerciseLogService from '../../../../services/exercise/exercise-log.service'
import { useCompleteLog } from './useCompleteLog'

export const useUpdateLogQuantity = quantity => {
	//
	const { id } = useParams()

	const queryClient = useQueryClient()

	const { completeLog, errorCompleted } = useCompleteLog()

	const { mutate, error: errorChange } = useMutation(
		['update log quantity'],
		({ quantityId, body }) => {
			ExerciseLogService.updateQuantity(quantityId, body)
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get exercise log', id]).then(() => {
					const filteredQuantity = quantity.filter(time => time.isCompleted)

					if (filteredQuantity.length === quantity.length - 1) {
						completeLog({ isCompleted: true })
					}
				})
			}
		}
	)
	return { updateQuantity: mutate, error: errorChange || errorCompleted }
}
