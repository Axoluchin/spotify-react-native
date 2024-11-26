const isExpiredTime = (time: Date) => {
  let actualTime = new Date().getTime()
  return actualTime >= time.getTime()
}

export default isExpiredTime
