import jwt from 'jsonwebtoken'

// sign - знак
export const generateToken = userId =>
	jwt.sign(
		{
			userId
		},
		process.env.JWT_SECRET,
		{
			expiresIn: '10d'
		}
	)
