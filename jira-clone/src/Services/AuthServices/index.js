import Configuration from '../../Configuration';
import { User } from "../../Dal/User";
import * as jwt from 'jsonwebtoken';
import reduxStore from '../../Redux';

// import { Store } from "../../Redux";
// // export function login(data) {
// //     return axios.post(`${Config.serverUsersRoute}/login`, { username: data.username, password: data.password })
// //         .then(response => {
// //             localStorage.setItem(Config.accessTokenName, response.data.token);
// //             localStorage.setItem('x-access-token-expiration', Date.now() + 2 * 60 * 60 * 1000);
// //             return response.data
// //         })
// //         .catch(err => Promise.reject('Authentication Failed!'));
// // }

export function isAuthenticated() {
    return localStorage.getItem(Config.accessTokenName) && localStorage.getItem('x-access-token-expiration') > Date.now()
}

export function signUp(username, password) {
    let user = new User(username, password)
    localStorage.setItem(Configuration.accessTokenName, user.token);
    return {
        type: "newUser",
        content: user
    }
}

function signToken(username) {
    return jwt.sign(username, Configuration.jwtSecret);
}

function verifyToken(req, res, next) {

}

export default {
    signToken,
    verifyToken,
    signUp
}