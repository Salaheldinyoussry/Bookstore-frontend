// return the user data from the session storage
export const getUser = () => {
  let userStr;
  if (localStorage.getItem("keptLogged") == "true") {
    userStr = localStorage.getItem("user");
  } else {
    userStr = sessionStorage.getItem("user");
  }
  if (userStr) return JSON.parse(userStr);
  else return null;
};

// return the token from the session storage
export const getToken = () => {
  if (localStorage.getItem("keptLogged") == "true") {
    return localStorage.getItem("token") || null;
  }
  return sessionStorage.getItem("token") || null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// set the token and user from the session storage
export const setUserSession = (token, user, role) => {
  if (localStorage.getItem("keptLogged") == "true") {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem("token", token);
    localStorage.setItem("role", role);
    sessionStorage.setItem("role", role);
  } else {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem("role", role);
  }
  // sessionStorage.setItem('token', token);
  // sessionStorage.setItem('user', JSON.stringify(user));
};

export const getRole = () => {
  if (localStorage.getItem("keptLogged") == "true") {
    return localStorage.getItem("role") || null;
  }
  return sessionStorage.getItem("role") || null;
};
