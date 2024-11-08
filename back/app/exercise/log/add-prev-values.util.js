export const addPrevValues = (log, prevLog = null) => {
	return log.times.map((item, index) => ({
		...item,
		prevWeight: prevLog ? prevLog.quantity[index].weight : 0,
		prevRepeat: prevLog ? prevLog.quantity[index].repeat : 0
	}))
}
