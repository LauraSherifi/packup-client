//check for token
export const isAuthenticated = () => {
  return Boolean(localStorage.getItem('token'));
};

//clear everything when loged out
export const logout = () => {
  localStorage.clear(); 
};
