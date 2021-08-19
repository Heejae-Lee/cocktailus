const isAdmin = () => {
  const member = JSON.parse(window.localStorage.getItem("memberData"))
  if (member === null) {
    return false
  } else if (member !== null && member.role === "ROLE_Member"){
    return false
  } else {
    return true
  }
}

export default isAdmin;