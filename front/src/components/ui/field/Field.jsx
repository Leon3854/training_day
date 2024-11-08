import styles from './Field.module.scss'
//
const Field = ({ register, name, options, error, ...rest }) => {
	return (
		<div style={{ marginBottom: '1rem' }}>
			<input className={styles.input} {...rest} {...register(name, options)} />
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}

export default Field
