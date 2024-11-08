import { $axios } from '../../api'

import { EXERCISES } from './exercise.service'

const LOG = `${EXERCISES}/log`

class ExerciseLogService {
	async getById(id) {
		return $axios.get(`${LOG}/${id}`)
	}

	async create(exerciseId) {
		return $axios.post(`${LOG}/${exerciseId}`)
	}

	// "weight": 10,
	// "repeat": 20,
	// "isCompleted": true,
	async updateQuantity(quantityId, body) {
		return $axios.put(`${LOG}/quantity/${quantityId}`, body)
	}

	// 	"isCompleted": true
	async complete(id, body) {
		return $axios.patch(`${LOG}/complete/${id}`, body)
	}
}

export default new ExerciseLogService()
