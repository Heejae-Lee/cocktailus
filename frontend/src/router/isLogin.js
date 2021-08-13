const isLogin = () => {
  const member = JSON.parse(window.localStorage.getItem("memberData"))
  if (member === null) {
    return false
  } else {
    return true
  }
}

export default isLogin;