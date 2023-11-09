import Cookies from 'js-cookie';

// Set a cookie
export function setCookie(name, value, options = {}) {
  Cookies.set(name, value, { expires: 7, path: '/' }); 
}

// Get a cookie
export function getCookie(name) {
  return Cookies.get(name);
}

// Destroy a cookie
export function destroyCookie(name) {
  Cookies.remove(name);
}
