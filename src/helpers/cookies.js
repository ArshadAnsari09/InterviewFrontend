import Cookies from 'js-cookie';

const setCookie = (name, value) => {
    Cookies.set(name, value);
};

const getCookie = (name) => {
    return Cookies.get(name);
};

const removeCookie = (name) => {
    Cookies.remove(name);
};

export { setCookie, getCookie, removeCookie };