import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import ExerciseLogService from '../../../../services/exercise/exercise-log.service'
import { useUpdateLogQuantity } from './useUpdateLogQuantity'

export const useExerciseLog = () => {
	const { id } = useParams()

	const [quantity, setQuantity] = useState([])

	const {
		data: exerciseLog,
		isSuccess,
		isLoading
	} = useQuery(['get exercise log', id], () => ExerciseLogService.getById(id), {
		select: ({ data }) => data,
		onSuccess(data) {
			if (data?.quantity?.length) setQuantity(data.quantity)
		}
	})

	const { error, updateQuantity } = useUpdateLogQuantity(exerciseLog?.quantity)

	const onChangeState = (quantityId, key, value) => {
		const newQuantity = quantity.map(quantity => {
			if (quantity.id === quantityId) {
				return { ...quantity, [key]: value }
			}

			return quantity
		})

		setQuantity(newQuantity)
	}

	const getQuantity = quantityId => {
		return quantity.find(quantity => quantity.id === quantityId)
	}

	const getState = (quantityId, key) => {
		const quantity = getQuantity(quantityId)
		return quantity ? quantity[key] : key === 'isCompleted' ? false : 0
	}

	const toggleQuantity = (quantityId, isCompleted) => {
		const quantity = getQuantity(quantityId)
		updateQuantity({
			quantityId,
			body: {
				isCompleted,
				repeat: +quantity.repeat,
				weight: +quantity.weight
			}
		})
	}

	return {
		exerciseLog,
		isSuccess,
		isLoading,
		toggleQuantity,
		error,
		onChangeState,
		getState
	}
}
