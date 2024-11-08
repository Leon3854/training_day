import Home from '../components/screens/home/Home'
import Auth from '../components/screens/auth/Auth'
import Profile from '../components/screens/profile/Profile'
import NewWorkout from '../components/screens/new-workout/NewWorkout'
import NewExercise from '../components/screens/new-exercise/NewExercise'
import Workout from '../components/screens/workouts/detail/Workout'
import ListWorkouts from '../components/screens/workouts/list/ListWorkouts'
import ExerciseLog from '../components/screens/exercise-log/ExerciseLog'

export const routes = [
	// {
	// 	path: '',
	// 	component: Auth,
	// 	isAuth: false
	// },
	{
		path: '/',
		component: Home,
		isAuth: true
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	},
	{
		path: '/new-exercise',
		component: NewExercise,
		auth: true
	},

	{
		path: '/workout/:id',
		component: Workout,
		auth: true
	},
	{
		path: '/workouts',
		component: ListWorkouts,
		auth: true
	},
	{
		path: '/exercise/:id',
		component: ExerciseLog,
		auth: true
	}
]
